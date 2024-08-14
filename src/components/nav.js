import React, { useState } from "react";

const MobileFriendlyNav = ({ pageContext }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = (label) => setOpenDropdown(openDropdown === label ? null : label);

  return (
    <nav className="lg:basis-[80%] h-full flex items-center justify-end">
      {/* Hamburger Icon */}
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="p-2 focus:outline-none">
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-6 -6 24 24" width="28" fill="currentColor"><path d="M7.314 5.9l3.535-3.536A1 1 0 1 0 9.435.95L5.899 4.485 2.364.95A1 1 0 1 0 .95 2.364l3.535 3.535L.95 9.435a1 1 0 1 0 1.414 1.414l3.535-3.535 3.536 3.535a1 1 0 1 0 1.414-1.414L7.314 5.899z"></path></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -7 24 24" width="28" fill="currentColor"><path d="M1 0h5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2zm7 8h5a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2zM1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z"></path></svg>
          )}
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center">
        <div className="group h-full relative">
          <p className="p-nav font-medium px-[30px] group-hover:underline leading-[88px] cursor-pointer">Products</p>
          <div className="hidden group-hover:block absolute top-[88px] right-0 border-black border-2 w-[250px] max-h-[75vh] overflow-y-scroll bg-slate-200">
            {pageContext.urls['Product Single'].map((product, i) => (
              <a href={product.url} key={i} className="block p-xs px-[15px] py-[10px] font-medium hover:underline bg-white transition-all">{product.title}</a>
            ))}
          </div>
        </div>
        
        <div className="group h-full relative">
          <p className="p-nav font-medium px-[30px] group-hover:underline leading-[88px] cursor-pointer">Alternatives</p>
          <div className="hidden group-hover:block absolute top-[88px] right-0 border-black border-2 w-[250px] max-h-[75vh] overflow-y-scroll bg-slate-200">
            {pageContext.urls['Product Alternatives'].map((alternative, i) => (
              <a href={alternative.url} key={i} className="block p-xs px-[15px] py-[10px] font-medium hover:underline bg-white transition-all">{alternative.title}</a>
            ))}
          </div>
        </div>

        <div className="group h-full relative">
          <p className="p-nav font-medium px-[30px] group-hover:underline leading-[88px] cursor-pointer">Comparisons</p>
          <div className="hidden group-hover:block absolute top-[88px] right-0 border-black border-2 w-[250px] max-h-[75vh] overflow-y-scroll bg-slate-200">
            {pageContext.urls['Comparison'].map((comparison, i) => (
              <a href={comparison.url} key={i} className="block p-xs px-[15px] py-[10px] font-medium hover:underline bg-white transition-all">{comparison.title}</a>
            ))}
          </div>
        </div>

        <div className="group h-full relative">
          <p className="p-nav font-medium px-[30px] group-hover:underline leading-[88px] cursor-pointer">Features</p>
          <div className="hidden group-hover:block absolute top-[88px] right-0 border-black border-2 w-[250px] max-h-[75vh] overflow-y-scroll bg-slate-200">
            {pageContext.urls['Adjective Niche Format for Feature'].slice(0, pageContext.features.length).map((feature, i) => (
              <a href={feature.url} key={i} className="block p-xs px-[15px] py-[10px] font-medium hover:underline bg-white transition-all">{feature.title.replace(/^.*for /, '')}</a>
            ))}
          </div>
        </div>
      
      {/*
        <div className="group h-full relative">
          <p className="p-nav font-medium px-[30px] group-hover:underline leading-[88px] cursor-pointer">Demographics</p>
          <div className="hidden group-hover:block absolute top-[88px] right-0 border-black border-2 w-[250px] max-h-[75vh] overflow-y-scroll bg-slate-200">
            {pageContext.urls['Adjective Niche Format for Demographic'].slice(0, pageContext.demographics.length).map((demographic, i) => (
              <a href={demographic.url} key={i} className="block p-xs px-[15px] py-[10px] font-medium hover:underline bg-white transition-all">{demographic.title.replace(/^.*for /, '')}</a>
            ))}
          </div>
        </div>
      */}

      </div>

      {/* Mobile Menu */}
  <div className={`lg:hidden fixed inset-0 top-[90px] bg-white z-50 p-4 transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 overflow-y-scroll`}>


    <div className="mb-[15px]">
      <button onClick={() => toggleDropdown('Products')} className="w-full text-left font-medium p py-[15px]">
        Products
        <span className={`float-right ${openDropdown === 'Products' ? 'rotate-90': 'rotate-0'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -5 24 24" width="28" fill="currentColor"><path d="M5.314 7.071l-4.95-4.95A1 1 0 0 1 1.778.707l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414l4.95-4.95z"></path></svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-max-height duration-300 ${openDropdown === 'Products' ? "max-h-[3000px]" : "max-h-0"}`}>
        {pageContext.urls['Product Single'].map((product, i) => (
          <a href={product.url} key={i} className="block py-[10px] p-xs font-medium underline">
            {product.title}
          </a>
        ))}
      </div>
    </div>

    <div className="mb-[15px]">
      <button onClick={() => toggleDropdown('Alternatives')} className="w-full text-left font-medium p py-[15px]">
        Alternatives
        <span className={`float-right ${openDropdown === 'Alternatives' ? 'rotate-90': 'rotate-0'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -5 24 24" width="28" fill="currentColor"><path d="M5.314 7.071l-4.95-4.95A1 1 0 0 1 1.778.707l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414l4.95-4.95z"></path></svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-max-height duration-300 ${openDropdown === 'Alternatives' ? "max-h-[3000px]" : "max-h-0"}`}>
        {pageContext.urls['Product Alternatives'].map((alternative, i) => (
          <a href={alternative.url} key={i} className="block py-[10px] p-xs font-medium underline">
            {alternative.title}
          </a>
        ))}
      </div>
    </div>

    <div className="mb-[15px]">
      <button onClick={() => toggleDropdown('Comparisons')} className="w-full text-left font-medium p py-[15px]">
        Comparisons
        <span className={`float-right ${openDropdown === 'Comparisons' ? 'rotate-90': 'rotate-0'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -5 24 24" width="28" fill="currentColor"><path d="M5.314 7.071l-4.95-4.95A1 1 0 0 1 1.778.707l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414l4.95-4.95z"></path></svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-max-height duration-300 ${openDropdown === 'Comparisons' ? "max-h-[3000px]" : "max-h-0"}`}>
        {pageContext.urls['Comparison'].map((comparison, i) => (
          <a href={comparison.url} key={i} className="block py-[10px] p-xs font-medium underline">
            {comparison.title}
          </a>
        ))}
      </div>
    </div>

    <div className="mb-[15px]">
      <button onClick={() => toggleDropdown('Features')} className="w-full text-left font-medium p py-[15px]">
        Features
        <span className={`float-right ${openDropdown === 'Features' ? 'rotate-90': 'rotate-0'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -5 24 24" width="28" fill="currentColor"><path d="M5.314 7.071l-4.95-4.95A1 1 0 0 1 1.778.707l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414l4.95-4.95z"></path></svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-max-height duration-300 ${openDropdown === 'Features' ? "max-h-[3000px]" : "max-h-0"}`}>
        {pageContext.urls['Adjective Niche Format for Feature'].slice(0, pageContext.features.length).map((feature, i) => (
          <a href={feature.url} key={i} className="block py-[10px] p-xs font-medium underline">
            {feature.title.replace(/^.*for /, '')}
          </a>
        ))}
      </div>
    </div>
      

      {/* 
        <div className="mb-[15px]">
          <button onClick={() => toggleDropdown('Demographics')} className="w-full text-left font-medium p py-[15px]">
            Demographics
            <span className={`float-right ${openDropdown === 'Demographics' ? 'rotate-90': 'rotate-0'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -5 24 24" width="28" fill="currentColor"><path d="M5.314 7.071l-4.95-4.95A1 1 0 0 1 1.778.707l5.657 5.657a1 1 0 0 1 0 1.414l-5.657 5.657a1 1 0 0 1-1.414-1.414l4.95-4.95z"></path></svg>
            </span>
          </button>
          <div className={`overflow-hidden transition-max-height duration-300 ${openDropdown === 'Demographics' ? "max-h-[3000px]" : "max-h-0"}`}>
            {pageContext.urls['Adjective Niche Format for Demographic'].slice(0, pageContext.demographics.length).map((demographic, i) => (
              <a href={demographic.url} key={i} className="block py-[10px] p-xs font-medium underline">
                {demographic.title.replace(/^.*for /, '')}
              </a>
            ))}
          </div>
        </div>
       */}


  </div>


    </nav>
  );
};

export default MobileFriendlyNav;
