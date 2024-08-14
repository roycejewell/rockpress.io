import React from "react";

const ConclusionTable = ({ productA, productB }) => (
  <div className=''>

      <div className='flex items-start flex-wrap justify-between mb-[60px]'>
        <div className='relative basis-full mb-[30px] md:m-0 md:basis-[48%] self-stretch'>
          <a href={productA.affiliateUrl} className='h3 mb-[5px] underline flex items-center justify-start'>{productA.name}<svg xmlns="http://www.w3.org/2000/svg" viewBox="-6 -6.5 24 24" width="28" fill="currentColor"><path d="M7.828 2.414H2.243a1 1 0 1 1 0-2h8a.997.997 0 0 1 1 1v8a1 1 0 0 1-2 0V3.828l-6.779 6.779A1 1 0 0 1 1.05 9.192l6.778-6.778z"></path></svg></a>
          <p className='p mb-[75px]'>{productA.conclusion}</p>
          <a href={productA.affiliateUrl} className='button absolute bottom-0  bottom-0 font-bold h5 py-[10px] w-full text-center flex items-center justify-center'>Visit {productA.name} <svg xmlns="http://www.w3.org/2000/svg" viewBox="-6 -6.5 24 24" width="28" fill="currentColor"><path d="M7.828 2.414H2.243a1 1 0 1 1 0-2h8a.997.997 0 0 1 1 1v8a1 1 0 0 1-2 0V3.828l-6.779 6.779A1 1 0 0 1 1.05 9.192l6.778-6.778z"></path></svg></a>
        </div>
        <div className='relative basis-full md:basis-[48%] self-stretch'>
          <a href={productB.affiliateUrl} className='h3 mb-[5px] underline flex items-center justify-start'>{productB.name}<svg xmlns="http://www.w3.org/2000/svg" viewBox="-6 -6.5 24 24" width="28" fill="currentColor"><path d="M7.828 2.414H2.243a1 1 0 1 1 0-2h8a.997.997 0 0 1 1 1v8a1 1 0 0 1-2 0V3.828l-6.779 6.779A1 1 0 0 1 1.05 9.192l6.778-6.778z"></path></svg></a>
          <p className='p mb-[75px]'>{productB.conclusion}</p>
          <a href={productB.affiliateUrl} className='button absolute bottom-0  bottom-0 font-bold h5 py-[10px] w-full text-center flex items-center justify-center'>Visit {productB.name} <svg xmlns="http://www.w3.org/2000/svg" viewBox="-6 -6.5 24 24" width="28" fill="currentColor"><path d="M7.828 2.414H2.243a1 1 0 1 1 0-2h8a.997.997 0 0 1 1 1v8a1 1 0 0 1-2 0V3.828l-6.779 6.779A1 1 0 0 1 1.05 9.192l6.778-6.778z"></path></svg></a>
        </div>
      </div>
    </div>
);

export default ConclusionTable;
