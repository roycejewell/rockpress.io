import React from 'react';

const Testimonials = ({ header, testimonials }) => {
  return (
    <section className="py-[50px] bg-black border-t border-b border-stone-800 overflow-hidden h-[500px]">
      <div className="max-w-5xl mx-auto px-[25px] lg:px-[0px] flex flex-col md:flex-row">
        <h2 className="h2 mb-[50px] md:mb-0 md:w-1/3 md:pr-[25px]">{header}</h2>
        <div className="md:w-2/3 relative">
          <div className="animate-scroll">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={index} className="bg-black border border-stone-800 rounded-[25px] p-[25px] mb-[25px] transition-all">
                <div className="flex items-center mb-[25px]">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-[50px] h-[50px] object-cover rounded-full mr-[15px]"
                  />
                  <div>
                    <p className="p-md font-bold">{testimonial.name}</p>
                    <p className="p-xs text-stone-400">{testimonial.title}</p>
                  </div>
                </div>
                <p className="p-md text-stone-400 mb-[25px]">"{testimonial.testimonial}"</p>
                <img 
                  src={testimonial.logo} 
                  alt={`${testimonial.name}'s company`} 
                  className="h-[20px] w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
