import React from 'react';

const Alternator = ({ header, copy, image, isImageLeft = false }) => {
  return (
    <section className="">
      <div className="max-w-5xl mx-auto px-[25px] py-[50px] lg:px-[0px]">
        <div className={`flex flex-col ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-[50px]`}>
          <div className="md:w-1/2">
            <img src={image.src} alt={image.alt} className="w-full max-w-[400px] h-auto max-h-[400px]" />
          </div>
          <div className="md:w-1/2">
            <h2 className="h2 mb-[25px]" dangerouslySetInnerHTML={{ __html: header }}></h2>
            <p className="p-md max-w-[400px] text-stone-400">{copy}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Alternator;
