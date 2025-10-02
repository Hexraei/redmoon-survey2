
import React from 'react';

interface LandingProps {
    onNext: () => void;
}

const Landing: React.FC<LandingProps> = ({ onNext }) => {
    return (
        <div className="flex flex-col justify-start min-h-screen p-8 text-left bg-white relative">
            <div className="mb-12">
                <img src="https://z-cdn-media.chatglm.cn/files/32b2902d-bf5d-4c68-b449-a7a6d0e1daea_logo.png?auth_key=1790941401-c2d6c7592c84439ab379a370893005ab-0-09a6f86fb006cc12454c1e8ae7b5f85f" 
                     alt="REDMOON" 
                     className="w-48 h-24 md:w-64 md:h-32 object-contain" />
            </div>
            
            <div className="space-y-8 max-w-2xl">
                <h1 className="text-4xl md:text-5xl text-black font-light">
                    Be a Part of Defining <span className="font-semibold text-[#8B0909]">MIT's Fashion</span>
                </h1>
                
                <div className="text-black text-sm max-w-lg">
                    <p className="mb-4">
                        Complete this survey to earn the <span className="font-bold text-black">Badge of Communal</span> and unlock exclusive offers at REDMOON
                    </p>
                </div>
                
                <button 
                    onClick={onNext}
                    className="text-black text-lg underline hover:no-underline bg-transparent border-none p-0 cursor-pointer small-caps tracking-wider"
                    style={{textDecoration: 'underline', textUnderlineOffset: '4px'}}>
                    TAKE THE SURVEY >
                </button>
            </div>
            
            <div className="absolute bottom-8 left-8 right-8">
                <p className="text-black text-sm max-w-md font-medium">
                    We value your data and privacy. All information collected is used solely to enhance our products and services.
                </p>
            </div>
        </div>
    );
};

export default Landing;
