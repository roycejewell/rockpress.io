import React from "react"

const Layout = ({ pageContext, children }) => {
  console.log(pageContext)
  return (
    <div className='bg-black text-white w-full overflow-x-hidden'>
      <header className='h-[75px] border-stone-800 border rounded-2xl px-[20px] m-0 fixed top-[10px] left-[10px] right-[10px] lg:left-0 lg:right-0 bg-black z-40 max-w-5xl mx-auto'>
        <div className='w-full mx-auto md:px-[15px] h-full flex flex-wrap items-center justify-between'>
            <a className='block'  href='/'>
              <img title={pageContext.site.org + ' Header Logo'}  alt={pageContext.site.org + ' Header Logo'} className='h-[20px] md:h-[20px]' src={pageContext.site.logo}/>
            </a>
            <div className="flex items-center">
              <div className="flex items-center hidden sm:flex mr-[15px] border border-stone-800 px-[10px] md:px-[15px] py-[5px] rounded-full">
                <div className="w-[10px] h-[10px] rounded-full bg-red-500 mr-2 animate-pulse"></div>
                <span className='text-xs text-lime-400'>2 Seats Remaining</span>
              </div>
              <a href='#pricing' className='p-sm bg-lime-400 text-black px-[15px] py-[5px] rounded-lg hover:bg-stone-800 hover:text-lime-400 font-bold'>Secure Your Spot</a>
            </div>
        </div>
      </header>

      <main className=''>{children}</main>
    </div>
  )
}

export default Layout
