import React from "react"

const SinglePricing = ({ product }) => {

  return (
        <div className='basis-full pt-[15px] md:pt-[30px]'>
          <table className="overflow-hidden">
            <caption>
              <h3 className='h5 mb-[5px] md:mb-[15px]'>
                <span className='hidden'>{product.name} </span>
                Pricing
              </h3>
            </caption>
            <thead>
              <tr className=''>
                {product.pricingStructure.map((header, index) => (
                  <th key={index} className=''>
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {product.pricingData.map((plan, index) => (
                <tr key={index} className=''>
                  <td className='font-bold'>{plan.a}</td>
                  <td className=''>{plan.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

  )
}

export default SinglePricing
