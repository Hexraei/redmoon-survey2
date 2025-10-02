
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Stage } from './types';
import type { RegistrationData, SurveyAnswers } from './types';
import Landing from './components/Landing';
import TshirtSelection from './components/TshirtSelection';
import PreferencesIntro from './components/PreferencesIntro';
import Questions from './components/Questions';
import RegistrationIntro from './components/RegistrationIntro';
import Registration from './components/Registration';
import Completed from './components/Completed';
import Loading from './components/Loading';
import { trackEvent, submitSurvey, trackError } from './services/api';

const App: React.FC = () => {
    const [stage, setStage] = useState<Stage>(Stage.Landing);
    const [loading, setLoading] = useState<boolean>(false);
    const [selectedTShirts, setSelectedTShirts] = useState<string[]>([]);
    const [answers, setAnswers] = useState<SurveyAnswers>({});
    const [registrationData, setRegistrationData] = useState<RegistrationData>({
        name: '',
        phone: '',
        personalEmail: '',
        universityEmail: '',
    });

    // Use a ref to store the survey ID so it persists across re-renders without causing them.
    const surveyIdRef = useRef<string | null>(null);

    // Generate a unique survey ID when the component mounts.
    useEffect(() => {
        if (!surveyIdRef.current) {
            surveyIdRef.current = `survey_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`;
            trackEvent(surveyIdRef.current, 'SurveyInitialized', { userAgent: navigator.userAgent });
        }

        // Add a global error handler to catch unhandled exceptions
        const handleError = (event: ErrorEvent) => {
            if (surveyIdRef.current) {
                trackError(surveyIdRef.current, event.message, event.error?.stack);
            }
        };
        window.addEventListener('error', handleError);

        return () => {
            window.removeEventListener('error', handleError);
        };
    }, []);

    const handleStageChange = useCallback((newStage: Stage, delay: number = 2000, details: object = {}) => {
        setLoading(true);
        if (surveyIdRef.current) {
            trackEvent(surveyIdRef.current, `TransitioningTo_${newStage}`, details);
        }
        setTimeout(() => {
            setStage(newStage);
            setLoading(false);
        }, delay);
    }, []);

    const handleCompleteSurvey = useCallback(async () => {
        if (!surveyIdRef.current) {
            console.error("Survey ID not found.");
            return;
        }
        setLoading(true);
        trackEvent(surveyIdRef.current, 'AttemptingSurveySubmission', {});

        const finalData = {
            surveyId: surveyIdRef.current,
            selectedTShirts,
            answers,
            registration: registrationData
        };

        try {
            await submitSurvey(finalData);
            handleStageChange(Stage.Completed, 1000, { success: true });
        } catch (error) {
            console.error("Failed to submit survey:", error);
            trackError(surveyIdRef.current, 'SubmissionFailed', error instanceof Error ? error.stack : String(error));
            alert("There was an error submitting your survey. Please try again.");
            setLoading(false); // Stop loading on error
        }
    }, [selectedTShirts, answers, registrationData, handleStageChange]);


    const renderStage = () => {
        if (loading) {
            return <Loading />;
        }

        switch (stage) {
            case Stage.Landing:
                return <Landing onNext={() => handleStageChange(Stage.TshirtSelection)} />;
            case Stage.TshirtSelection:
                return <TshirtSelection 
                            selectedTShirts={selectedTShirts} 
                            setSelectedTShirts={setSelectedTShirts} 
                            onNext={() => handleStageChange(Stage.PreferencesIntro, 2000, { TShirtCount: selectedTShirts.length })} 
                        />;
            case Stage.PreferencesIntro:
                return <PreferencesIntro onNext={() => handleStageChange(Stage.Questions)} />;
            case Stage.Questions:
                return <Questions 
                            answers={answers}
                            setAnswers={setAnswers}
                            onNext={() => handleStageChange(Stage.RegistrationIntro)} 
                        />;
            case Stage.RegistrationIntro:
                return <RegistrationIntro onNext={() => handleStageChange(Stage.Registration)} />;
            case Stage.Registration:
                return <Registration 
                            registrationData={registrationData}
                            setRegistrationData={setRegistrationData}
                            onNext={handleCompleteSurvey} // Use the new submission handler
                        />;
            case Stage.Completed:
                return <Completed />;
            default:
                return <Landing onNext={() => handleStageChange(Stage.TshirtSelection)} />;
        }
    };

    return (
        <div className="min-h-screen bg-white text-black">
            {renderStage()}
        </div>
    );
};

export default App;
