import React from 'react';

const ThankYouHero
 = ({ title, copy, cta }) => {


    return (
        <section className="bg-gradient-to-b from-black to-black  pt-[150px] pb-[100px] w-full min-h-[100vh]">
            <div className="max-w-5xl mx-auto px-[25px] lg:px-[0px]">
                <div className="text-left max-w-5xl mx-auto">
                    <div className="inline-flex items-center mb-[25px] border border-stone-800 px-[15px] py-[5px] rounded-full">
                        <div className="w-[10px] h-[10px] rounded-full bg-red-500 mr-2 animate-pulse"></div>
                        <span className='text-xs text-lime-400 '>2 Seats Remaining</span>
                    </div>
                    <h1 className="h1 mb-[15px] max-w-[900px]">{title}</h1>
                    <p className="p-lg text-stone-400 max-w-[400px] mb-[25px]">{copy}</p>
                </div>

            </div>
        </section>
    );
};

export default ThankYouHero;
