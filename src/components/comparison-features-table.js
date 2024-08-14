import React from "react";


const FeaturesTable = ({ productA, productB }) => {

const getUniqueSortedFeatures = (productA, productB) => {
  const allFeatures = [...productA.features, ...productB.features];
  return Array.from(new Set(allFeatures)).sort();
};


const hasFeature = (product, feature) => product.features.includes(feature);


  const uniqueFeatures = getUniqueSortedFeatures(productA, productB);
  return (
  <div className='mb-[30px] md:mb-[60px]'>
  	<h2 className='h5 mb-[5px] md:mb-[15px]'>Feature Comparison</h2>
    <table className=''>
      <thead className='sticky top-[88px]'>
        <tr className=''>
          <th className='table-header'>Feature</th>
          <th className='w-[150px] md:w-[180px] relative table-button'><a href={productA.affiliateUrl} className='font-bold flex items-center justify-start'>{productA.name}<svg xmlns="http://www.w3.org/2000/svg" viewBox="-6 -6.5 24 24" width="28" fill="currentColor"><path d="M7.828 2.414H2.243a1 1 0 1 1 0-2h8a.997.997 0 0 1 1 1v8a1 1 0 0 1-2 0V3.828l-6.779 6.779A1 1 0 0 1 1.05 9.192l6.778-6.778z"></path></svg></a></th>
          <th className='w-[150px] md:w-[180px] relative table-button'><a href={productB.affiliateUrl} className='font-bold flex items-center justify-start'>{productB.name}<svg xmlns="http://www.w3.org/2000/svg" viewBox="-6 -6.5 24 24" width="28" fill="currentColor"><path d="M7.828 2.414H2.243a1 1 0 1 1 0-2h8a.997.997 0 0 1 1 1v8a1 1 0 0 1-2 0V3.828l-6.779 6.779A1 1 0 0 1 1.05 9.192l6.778-6.778z"></path></svg></a></th>
        </tr>
      </thead>
      <tbody>
        {uniqueFeatures.map((feature, index) => (
          <tr key={index}>
            <td className='feature-text-table'>{feature}</td>
            <td className={`${hasFeature(productA, feature) ? '': ''}`}>
            	{hasFeature(productA, feature) ? (
            	<div className='flex items-center justify-center'>
            		<span className='hidden'>Yes</span>
            		<svg className='icon' xmlns="http://www.w3.org/2000/svg" viewBox="-5 -7 24 24" width="28" fill="currentColor"><path d="M5.486 9.73a.997.997 0 0 1-.707-.292L.537 5.195A1 1 0 1 1 1.95 3.78l3.535 3.535L11.85.952a1 1 0 0 1 1.415 1.414L6.193 9.438a.997.997 0 0 1-.707.292z"></path></svg>
            	</div>
            	) : (
            	<div className='flex items-center justify-center'>
            		<span className='hidden'>No</span>
					<span className='font-bold text-slate-200'>—</span>
				</div>
            	)}
        	</td>
            <td className={`${hasFeature(productB, feature) ? '': ''}`}>
            	{hasFeature(productB, feature) ? (
            	<div className='flex items-center justify-center'>
            		<span className='hidden'>Yes</span>
            		<svg className='icon' xmlns="http://www.w3.org/2000/svg" viewBox="-5 -7 24 24" width="28" fill="currentColor"><path d="M5.486 9.73a.997.997 0 0 1-.707-.292L.537 5.195A1 1 0 1 1 1.95 3.78l3.535 3.535L11.85.952a1 1 0 0 1 1.415 1.414L6.193 9.438a.997.997 0 0 1-.707.292z"></path></svg>

            	</div>
            	) : (
            	<div className='flex items-center justify-center'>
            		<span className='hidden'>No</span>
					<span className='font-bold text-slate-200'>—</span>
				</div>
            	)}
        	</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  );
};

export default FeaturesTable;
