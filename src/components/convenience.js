import React, { useState, useEffect, useRef } from 'react';

const Convenience = ({ header, copy, image, items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoLooping, setIsAutoLooping] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  const handleItemClick = (index) => {
    setCurrentIndex(index);
    setIsAutoLooping(false);
  };

  const handleBackToStart = () => {
    setCurrentIndex(0);
    setIsAutoLooping(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        setIsAutoLooping(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let interval;
    if (isAutoLooping && isInView) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [items.length, isAutoLooping, isInView]);

  return (
    <section ref={sectionRef} className="py-[50px] bg-black">
      <div className="max-w-5xl mx-auto px-[25px] lg:px-[0px]">
        <h2 className="h2 mb-[25px] text-white">{header}</h2>
        <p className="p-md text-stone-400 mb-[50px] max-w-[450px]">{copy}</p>
        <div className="relative overflow-visible">
          <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 350}px)` }}>
            {items.map((item, index) => (
              <div key={index} className="w-[325px] md:w-[325px] flex-shrink-0 mx-[12.5px]" onClick={() => handleItemClick(index)}>
                <div className={`flex flex-col items-start text-stone-400 border border-stone-800 hover:bg-stone-900 hover:mt-[-25px] rounded-[25px] p-[25px] h-[325px] transition-all duration-500 ${index === currentIndex ? 'mt-[-25px]' : ''} cursor-pointer`}>
                  {Array.isArray(item.icon) ? (
                    <div className="flex space-x-[20px] mb-[15px]">
                      {item.icon.map((icon, iconIndex) => (
                        <img key={iconIndex} src={icon} alt="" className="w-[35px] h-[35px]" />
                      ))}
                    </div>
                  ) : (
                    <img src={item.icon} alt="" className="w-[40px] h-[40px] mb-[15px]" />
                  )}
                  <span className={`h3 mb-[15px] ${index === currentIndex ? 'text-white' : 'text-white'}`}>{item.header}</span>
                  <span className="p-md">{item.copy}</span>
                  {index === items.length - 1 && (
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBackToStart();
                      }}
                      className="mt-auto bg-black text-lime-400 underline"
                    >
                      Back to Start
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Convenience;
