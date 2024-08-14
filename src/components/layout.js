import React from "react"
import Nav from './nav'

const Layout = ({ pageContext, children }) => {
  return (
    <div className=''>
      <header className='h-[90px] border-b-2 border-b-black p-0 m-0 fixed top-0 left-0 right-0 bg-white bg-white z-40'>
        <div className='max-w-6xl w-full mx-auto px-[15px] h-full flex flex-wrap items-center justify-between'>
            <a className='block'  href='/'>
              <img title={pageContext.site.org + ' Header Logo'}  alt={pageContext.site.org + ' Header Logo'} className='h-[20px] md:h-[20px]' src={pageContext.site.logo}/>
            </a>

            <Nav pageContext={pageContext}/>
        </div>
      </header>
      <div className='h-[90px]'></div>

      <main className='max-w-3xl mx-auto px-[15px] my-[15px] md:my-[60px]'>{children}</main>
      <footer className='border-t-2 border-t-black py-[30px]'>
        <div className='max-w-6xl w-full mx-auto px-[15px] h-full flex flex-wrap items-center justify-start'>


            <div className='basis-full md:basis-[30%] mb-[30px] lg:mb-[60px]'>
              <a className='block'  href='/'>
              <img title={pageContext.site.org + ' Footer Logo'}  alt={pageContext.site.org + ' Header Logo'} className='h-[20px] md:h-[20px]' src={pageContext.site.logo}/>
              </a>
            </div>


            <div className='basis-full flex-wrap flex items-start justify-between'>


                <div className='basis-[48%] md:basis-[22%] mb-[30px]'>
                  <p className='p-sm font-bold mb-[10px]'>Products</p>
                  {pageContext.urls['Product Single'].map((product, i)=>{
                    return(
                    <a href={product.url} className='block basis-full p-xs hover:underline mb-[5px]'>{product.title}</a>
                    )
                  })}
                </div>

                <div className='basis-[48%] md:basis-[22%] mb-[30px]'>
                  <p className='p-sm font-bold mb-[10px]'>Alternatives</p>
                  {pageContext.urls['Product Alternatives'].map((alternative, i)=>{
                    return(
                    <a href={alternative.url} className='block basis-full p-xs hover:underline mb-[5px]'>{alternative.title}</a>
                    )
                  })}
                </div>

                <div className='basis-[48%] md:basis-[22%] mb-[30px]'>
                  <p className='p-sm font-bold mb-[10px]'>Comparisons</p>
                  {pageContext.urls['Comparison'].map((comparison, i)=>{
                    return(
                    <a href={comparison.url} className='block basis-full p-xs hover:underline mb-[5px]'>{comparison.title}</a>
                    )
                  })}
                </div>





              <div className='basis-[48%] md:basis-[22%] mb-[30px]'>
                <p className='p-sm font-bold mb-[10px]'>Features</p>
                {pageContext.urls['Adjective Niche Format for Feature'].slice(0, pageContext.features.length).map((feature, i)=>{
                  return(
                  <a href={feature.url} className='block basis-full p-xs hover:underline mb-[5px]'>{feature.title.replace(/^.*for /, '')}</a>
                  )
                })}
              </div>
      {/* 

              <div className='basis-[48%] md:basis-[22%]'>
                <p className='p-sm font-bold mb-[10px]'>Demographics</p>
                {pageContext.urls['Adjective Niche Format for Demographic'].slice(0, pageContext.demographics.length).map((feature, i)=>{
                  return(
                  <a href={feature.url} className='block basis-full p-xs hover:underline mb-[5px]'>{feature.title.replace(/^.*for /, '')}</a>
                  )
                })}
              </div>
       */}


          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
