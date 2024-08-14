import React, {useState} from "react"

const SingleFeatures = ({ product }) => {

  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };

  return (
	<div className='basis-full pt-[15px] md:pt-[30px]'>
	  <h3 className='h5 mb-[5px] md:mb-[15px]'>
	    <span className='hidden'>{product.name} </span>
	    Features
	  </h3>
	  <ul className={`transition-all flex flex-wrap justify-between items-start pl-[15px] overflow-y-hidden ${isActive ? 'max-h-[2000px]' : 'max-h-[200px]'}`}>
	    {product.features.map((feature, i) => {
	      return (
	        <li key={`feature-${i}`} className='feature-border px-0 py-[5px] basis-full md:py-[10px] self-stretch md:basis-[48%]'>
	          <div className='flex items-center justify-start'>
	            <span className='feature-text-list'>{feature}</span>
	          </div>
	        </li>
	      );
	    })}
	  </ul>
	  {!isActive && (
	  <div onClick={toggleClass} className='inline-flex cursor-pointer rounded-full basis-auto mt-[15px] font-medium bg-slate-100 py-[5px] border-slate-200 border pl-[15px] pr-[5px] text-center'>
	  	See {isActive ? 'Less' : 'More'} Features
	  	<svg className='mt-[-1px]' xmlns="http://www.w3.org/2000/svg" viewBox="-8 -5 24 24" width="28" fill="currentColor"><path d="M5.314 7.071l-4.95-4.95A1 1 0 0 1 1.778.707l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414l4.95-4.95z"></path></svg>
	  </div>
	  	)}
	</div>
  )
}

export default SingleFeatures
