import React, { useState, useEffect, useCallback } from 'react';

const Hero = ({ title, copy, cta, clients }) => {
  const [currentClientIndex, setCurrentClientIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const resetTimer = useCallback(() => {
    setProgress(0);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress(prev => prev + (100 / 5000) * 100); // Increase progress every 100ms
      } else {
        resetTimer();
        setCurrentClientIndex(prev => (prev + 1) % clients.length);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [progress, clients.length, resetTimer]);

  const handleLogoClick = (index) => {
    setCurrentClientIndex(index);
    resetTimer();
  };

  return (
    <section className="bg-gradient-to-b from-black to-black  pt-[150px] pb-[100px] w-full">
      <div className="max-w-5xl mx-auto px-[25px] lg:px-[0px]">
        <div className="text-left max-w-5xl mx-auto">
          <div className="inline-flex items-center mb-[25px] border border-stone-800 px-[15px] py-[5px] rounded-full">
            <div className="w-[10px] h-[10px] rounded-full bg-red-500 mr-2 animate-pulse"></div>
            <span className='text-xs text-lime-400 '>2 Seats Remaining</span>
          </div>
          <h1 className="h1 mb-[15px] max-w-[900px]">{title}</h1>
          <p className="p-md text-stone-400 max-w-[400px] mb-[25px]">{copy}</p>
          <a
            href={cta.url}
            className="button h5 inline-block mx-auto"
          >
            {cta.text}
          </a>
        </div>
        {clients && clients.length > 0 && (
          <div className="mt-[100px] mb-[25px]">
            <div className="flex flex-wrap justify-start items-center gap-[25px] md:gap-[50px]">
              {clients.map((client, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={client.logo.src}
                    alt={client.logo.alt}
                    className={`h-[25px] w-[75px] md:w-[140px] md:px-[20px] mb-[15px] transition-all cursor-pointer ${index === currentClientIndex ? '' : 'grayscale opacity-50'}`}
                    onClick={() => handleLogoClick(index)}
                  />
                  <div className="w-full rounded-full overflow-hidden h-[5px] bg-stone-800 relative transition-all" style={{
                    opacity: index === currentClientIndex ? 1 : 0
                  }}>
                    <div 
                      className="absolute top-0 left-0 h-full bg-lime-400 transition-all"
                      style={{
                        width: `${index === currentClientIndex ? progress : 0}%`,
                        opacity: index === currentClientIndex ? 1 : 0
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {clients && clients.length > 0 && (
          <div className="relative h-[55vw] max-h-[600px] w-full">
            {clients.map((client, index) => (
              <img
                key={index}
                src={client.screenshot}
                alt={`${client.logo.alt} Screenshot`}
                className={`w-full h-full object-cover rounded-[25px] absolute top-0 left-0 transition-opacity duration-500 ${
                  index === currentClientIndex ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
