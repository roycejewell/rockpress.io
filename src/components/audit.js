import React from 'react';

const CTA = ({ header, copy, ctaText, ctaLink, image, alt }) => {
  return (
    <section className="py-[50px] mb-[50px]" id="audit">
      <div className="mx-auto px-[25px]">
        <div className="max-w-5xl bg-black border border-stone-800 py-[75px] px-[50px] rounded-[25px] mx-auto flex md:flex-row-reverse flex-wrap justify-between items-center">
          <img src={image} alt={alt} className="w-[400px] rounded-md mx-auto mb-[25px]" />
          <div className="basis-full md:basis-[45%]">
            <div className="inline-flex bg-black items-center mb-[25px] border border-stone-800 px-[15px] py-[5px] rounded-full">
              <div className="w-[10px] h-[10px] rounded-full bg-red-500 mr-2 animate-pulse"></div>
              <span className='text-xs text-lime-400'>3 Audits Remaining This Month</span>
            </div>
            <h2 className="h2 text-white font-bold mb-[25px] max-w-[700px]">{header}</h2>
            <button
              data-tally-hide-title="1"
              data-tally-open="3yvBRp"
              data-tally-width="450"
              data-tally-layout="modal"
              className="button h5 mr-[15px]"
            >
              {ctaText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
