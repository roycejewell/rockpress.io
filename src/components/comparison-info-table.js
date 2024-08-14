import React from "react";

const InfoTable = ({ productA, productB }) => (
	<div className=''>
      <div className='flex items-start flex-wrap justify-between my-[30px] md:my-[60px]'>
        <div className='relative basis-full mb-[15px] lg:m-0 md:basis-[48%] self-stretch'>
          <h2 className='mb-[5px]'>
            <a href={productA.affiliateUrl} className='h3 underline font-bold flex items-center justify-start'>{productA.name}<svg xmlns="http://www.w3.org/2000/svg" viewBox="-6 -6.5 24 24" width="28" fill="currentColor"><path d="M7.828 2.414H2.243a1 1 0 1 1 0-2h8a.997.997 0 0 1 1 1v8a1 1 0 0 1-2 0V3.828l-6.779 6.779A1 1 0 0 1 1.05 9.192l6.778-6.778z"></path></svg></a>
          </h2>
          <p className='p'>{productA.intro}</p>
        </div>
        <div className='relative basis-full md:basis-[48%] self-stretch'>
          <h2 className='mb-[5px]'>
            <a href={productB.affiliateUrl} className='h3 underline font-bold flex items-center justify-start'>{productB.name}<svg xmlns="http://www.w3.org/2000/svg" viewBox="-6 -6.5 24 24" width="28" fill="currentColor"><path d="M7.828 2.414H2.243a1 1 0 1 1 0-2h8a.997.997 0 0 1 1 1v8a1 1 0 0 1-2 0V3.828l-6.779 6.779A1 1 0 0 1 1.05 9.192l6.778-6.778z"></path></svg></a>
          </h2>
          <p className='p'>{productB.intro}</p>
        </div>
      </div>
    </div>
);

export default InfoTable;