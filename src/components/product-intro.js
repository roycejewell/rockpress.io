import React from "react"
import SinglePricing from './single-pricing'
import SingleFeatures from './single-features'
import SingleComparisons from './single-comparisons'

const ProductIntro = ({ product, key, urls }) => {

const comparisonUrls = urls['Comparison'].filter(url => url.title.includes(product.name)).map(item => {
    const [part1, part2] = item.title.split(' vs ');
    if (part1 === product.name) {
        return item; // Title is already in the desired format
    } else {
        return {
            ...item,
            title: `${product.name} vs ${part1}`
        };
    }
});

const alternativeUrl = urls['Product Alternatives'].filter(url => url.title.includes(product.name))[0];

  return (
    <div key={key} className='flex flex-wrap justify-between items-start bg-white  py-[30px] my-[30px] md:my-[60px] md:py-[60px] my-[30px] md:my-[60px]'>
    <div className='basis-full '>
    
    <div className=' relative'>
        <img title={product.name} alt={product.name} src={product.image} className='rounded-lg mb-[15px] md:mb-[30px]'/>

      	<h2>
          <a href={product.affiliateUrl} className='h2 underline flex items-center justify-start mb-[15px]'>{product.name}<svg xmlns="http://www.w3.org/2000/svg" viewBox="-6 -6.5 24 24" width="28" fill="currentColor"><path d="M7.828 2.414H2.243a1 1 0 1 1 0-2h8a.997.997 0 0 1 1 1v8a1 1 0 0 1-2 0V3.828l-6.779 6.779A1 1 0 0 1 1.05 9.192l6.778-6.778z"></path></svg></a>
        </h2>
        <h3 className='hidden'>{product.name} Intro</h3>
        <p className='p-lg'>{product.intro}</p>

        

      <SingleFeatures product={product}/>

      <SinglePricing product={product}/>

      <SingleComparisons product={product} comparisonUrls={comparisonUrls}/>




      <div className='basis-full pt-[15px] md:pt-[30px]'>
        <h3 className='h5 mb-[5px] md:mb-[15px]'>
          <span className='hidden'>{product.name} </span>
          Alternatives
        </h3>
        <a className='p link' href={alternativeUrl.url}>{alternativeUrl.title}</a>
      </div>


      <div className='basis-full pt-[15px] md:pt-[30px]'>
        <h3 className='h5 mb-[5px] md:mb-[15px]'>
          <span className='hidden'>{product.name} </span>
          Conclusion
        </h3>
        <p className='p-lg mb-[15px]'>{product.conclusion}</p>
        <a href={product.affiliateUrl} className='button mt-[15px] bottom-0 h5 py-[15px] w-full text-center flex items-center justify-center'>Visit {product.name} <svg xmlns="http://www.w3.org/2000/svg" viewBox="-6 -6.5 24 24" width="28" fill="currentColor"><path d="M7.828 2.414H2.243a1 1 0 1 1 0-2h8a.997.997 0 0 1 1 1v8a1 1 0 0 1-2 0V3.828l-6.779 6.779A1 1 0 0 1 1.05 9.192l6.778-6.778z"></path></svg></a>
      </div>



      </div>


      </div>


    </div>
  )
}

export default ProductIntro
