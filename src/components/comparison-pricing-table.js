import React from "react";

const PricingTable = ({ productA, productB }) => {
  return (
  <div className='mb-[30px] md:mb-[60px]'>
    <h2 className='h5 mb-[5px] md:mb-[15px]'>Pricing Comparison</h2>
    <table className=''>
      <thead className='sticky top-[88px]'>
        <tr className=''>
          <th className='w-[150px] md:w-[180px] relative table-button'><a href={productA.affiliateUrl} className='font-bold flex items-center justify-start'>{productA.name}<svg xmlns="http://www.w3.org/2000/svg" viewBox="-6 -6.5 24 24" width="28" fill="currentColor"><path d="M7.828 2.414H2.243a1 1 0 1 1 0-2h8a.997.997 0 0 1 1 1v8a1 1 0 0 1-2 0V3.828l-6.779 6.779A1 1 0 0 1 1.05 9.192l6.778-6.778z"></path></svg></a></th>
          <th className='w-[150px] md:w-[180px] relative table-button'><a href={productB.affiliateUrl} className='font-bold flex items-center justify-start'>{productB.name}<svg xmlns="http://www.w3.org/2000/svg" viewBox="-6 -6.5 24 24" width="28" fill="currentColor"><path d="M7.828 2.414H2.243a1 1 0 1 1 0-2h8a.997.997 0 0 1 1 1v8a1 1 0 0 1-2 0V3.828l-6.779 6.779A1 1 0 0 1 1.05 9.192l6.778-6.778z"></path></svg></a></th>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: Math.max(productA.pricingData.length, productB.pricingData.length) }).map((_, index) => {
          const pricingA = productA.pricingData[index] || {}; // Use an empty object if productA data is missing
          const pricingB = productB.pricingData[index] || {}; // Use an empty object if productB data is missing
          return (
            <tr key={index}>
              <td className=''>
                <span className='block font-bold'>
                  {pricingA.a || ''}
                </span>
                <span className='block font-light'>
                  {pricingA.b || ''}
                </span>
              </td>
              <td className=''>
                <span className='block font-bold'>
                  {pricingB.a || ''}
                </span>
                <span className='block font-light'>
                  {pricingB.b || ''}
                </span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
  );
};
export default PricingTable;
