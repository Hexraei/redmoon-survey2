
import React from 'react';

const Loading: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <div className="text-center animate-pulse">
                <img 
                    src="https://z-cdn-media.chatglm.cn/files/24c80368-5028-4ea5-a80c-e035d595c2fe_loader-logo.png?auth_key=1790941401-f04b35f2637147dfb0995089308b46c0-0-06dd626daa15114e92e8541cf6ababec" 
                    alt="REDMOON Loading" 
                    className="w-16 h-8 md:w-20 md:h-10 object-contain mx-auto"
                />
            </div>
        </div>
    );
};

export default Loading;
