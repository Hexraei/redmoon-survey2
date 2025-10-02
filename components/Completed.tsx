
import React from 'react';

const Completed: React.FC = () => {
    return (
        <div className="flex flex-col justify-start min-h-screen p-8 text-left bg-white relative">
            <div className="mb-12">
                <img src="https://z-cdn-media.chatglm.cn/files/32b2902d-bf5d-4c68-b449-a7a6d0e1daea_logo.png?auth_key=1790941401-c2d6c7592c84439ab379a370893005ab-0-09a6f86fb006cc12454c1e8ae7b5f85f" 
                     alt="REDMOON" 
                     className="w-48 h-24 md:w-64 md:h-32 object-contain" />
            </div>
            
            <div className="space-y-8 max-w-2xl">
                <h1 className="text-4xl md:text-5xl text-black font-light">
                    Thank you.
                </h1>
                
                <div className="text-black text-lg max-w-2xl mb-6">
                    We sincerely appreciate your time, insights, and thoughtful participation in this survey. You have earned the <span className="font-semibold text-[#8B0909]">Badge of Communal</span> and are now an <span className="font-semibold text-[#8B0909]">official member</span> of the REDMOON wardrobe community.
                </div>

                <div className="text-black text-sm max-w-2xl mb-6">
                    Your responses will help us create the perfect REDMOON collection that truly represents MIT's unique fashion identity. Expect exclusive updates and early access to our launch collection.
                </div>

                <div className="text-black text-xs small-caps max-w-2xl">
                    To learn more about REDMOON's journey and why it started, please <span className="underline cursor-pointer">click here</span>.
                </div>
            </div>
            
            <div className="absolute bottom-8 left-8 right-8">
                <div className="text-black text-xs space-y-2">
                    <p>2025 REDMOON, Official Merchandise of MIT</p>
                    <p>For Queries contact redmoon.mit@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default Completed;
