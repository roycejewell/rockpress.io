import React from "react"

const SingleComparisons = ({ product, comparisonUrls }) => {

  return (
      <div className='basis-full pt-[15px] md:pt-[30px]'>
          <h3 className='h5 mb-[5px] md:mb-[15px]'>
            <span className='hidden'>{product.name} </span>
            Comparisons
          </h3>
          <ul className='last:mb-0 flex flex-wrap items-start justify-between w-full'>
          {comparisonUrls.map((comparison, i)=> (
            <li className='list-none self-stretch block basis-full md:basis-[48%]'>
                <a className='p link mb-[10px] md:mb-[15px] block' href={comparison.url}>{comparison.title}</a>
            </li>
          ))}
          </ul>
      </div>
  )
}

export default SingleComparisons
