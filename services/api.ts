// IMPORTANT: Replace this with the actual Web app URL you got from deploying your Google Apps Script.
const SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID_HERE/exec';

/**
 * Sends data to the Google Apps Script backend.
 * @param action The type of action to perform (e.g., 'submitSurvey', 'trackEvent').
 * @param data The payload of data to send.
 */
async function sendData(action: string, data: object) {
  try {
    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      // Use 'cors' mode. Apps Script is configured to handle simple POSTs from any origin.
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8', // Corrected typo here
      },
      // Redirect must be 'follow' for Apps Script web apps.
      redirect: 'follow',
      // Stringify the entire payload, including action and data.
      body: JSON.stringify({ action, data }),
    });

    // Although we get a response, we don't need to read it for a simple "fire-and-forget" system.
    // However, checking for a successful response status is good practice.
    if (!response.ok) {
        // Log the response text if the request was not successful
        const errorText = await response.text();
        console.error(`Google Apps Script Error: ${response.statusText}`, errorText);
        throw new Error(`Server responded with status: ${response.status}`);
    }
    
    // You can optionally log the success response for debugging
    // const result = await response.json();
    // console.log('API Response:', result);

  } catch (error) {
    console.error(`Failed to execute action "${action}"`, error);
    // Re-throw the error so the calling function can handle it.
    throw error;
  }
}

/**
 * Submits the final consolidated survey data.
 * @param finalData The complete survey data object.
 */
export const submitSurvey = (finalData: object) => {
  return sendData('submitSurvey', finalData);
};

/**
 * Tracks a user interaction event.
 * @param surveyId The unique ID for the current survey session.
 * @param eventType A string describing the event (e.g., 'StageChange', 'TShirtSelected').
 * @param details An object containing additional information about the event.
 */
export const trackEvent = (surveyId: string, eventType: string, details: object) => {
  // This is a "fire-and-forget" call, so we don't need to await it or handle errors
  // unless we want to retry failed tracking calls.
  sendData('trackEvent', { surveyId, eventType, details }).catch(err => {
    console.warn(`Failed to track event "${eventType}"`, err);
  });
};

/**
 * Logs a client-side JavaScript error.
 * @param surveyId The unique ID for the survey session.
 * @param message The error message.
 * @param stack The error stack trace.
 */
export const trackError = (surveyId: string, message: string, stack?: string) => {
   sendData('trackError', { surveyId, message, stack }).catch(err => {
    console.warn(`Failed to log error: "${message}"`, err);
  });
};
