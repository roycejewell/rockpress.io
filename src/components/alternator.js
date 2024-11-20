import React from 'react';

const Alternator = ({ header, copy, image, isImageLeft = false }) => {
  return (
    <section className="">
      <div className="max-w-5xl mx-auto px-[25px] py-[25px] lg:px-[0px]">
        <div className={`flex flex-col ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center overflow-hidden border border-stone-800 rounded-[25px]`}>
          <div className={`md:w-1/2 bg-gradient-to-b from-lime-400 via-lime-800 to-black w-full ${isImageLeft ? 'md:bg-gradient-to-r' : 'md:bg-gradient-to-l'}`}>
            <img src={image.src} alt={image.alt} className="w-full h-auto max-w-[270px] md:max-w-[400px] mx-auto" />
          </div>
          <div className="md:w-1/2 p-[25px] md:p-[50px] w-full">
            <h2 className="h2 mb-[25px]" dangerouslySetInnerHTML={{ __html: header }}></h2>
            <p className="p-md max-w-[400px] text-stone-400">{copy}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Alternator;
