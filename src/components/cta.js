import React from 'react';

const CTA = ({ header, copy, ctaText }) => {
  return (
    <section className="py-[50px] mb-[50px]">
      <div className="mx-auto px-[25px]">
        <div className="max-w-5xl bg-lime-400 py-[75px] px-[50px] rounded-[25px] mx-auto text-center">
          <div className="inline-flex bg-black items-center mb-[25px] border border-stone-800 px-[15px] py-[5px] rounded-full">
            <div className="w-[10px] h-[10px] rounded-full bg-red-500 mr-2 animate-pulse"></div>
            <span className='text-xs text-lime-400'>2 Seats Remaining</span>
          </div>
          <h2 className="h1 text-black font-bold mb-[25px] max-w-[700px] mx-auto">{header}</h2>
          <a
            href="#pricing"
            className="inline-block py-[15px] px-[40px] bg-black h4 text-lime-400 rounded-lg hover:bg-stone-800 hover:text-lime-400 font-bold"
          >
            {ctaText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
