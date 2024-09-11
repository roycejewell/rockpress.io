import React, { useState } from 'react';

const FAQs = ({ header, faqs }) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleFAQ = (index) => {
    setOpenIndexes(prevIndexes =>
      prevIndexes.includes(index)
        ? prevIndexes.filter(i => i !== index)
        : [...prevIndexes, index]
    );
  };

  return (
    <section className="py-[50px] bg-black">
      <div className="max-w-5xl mx-auto px-[25px] lg:px-[0px]">
        <h2 className="h2 mb-[50px] text-center">{header}</h2>
        <div className="max-w-[700px] mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-[25px] border border-stone-800 rounded-[25px] overflow-hidden">
              <button
                className="flex justify-between items-center w-full text-left p-[25px] focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="h4">{faq.question}</span>
                <span className="ml-2 text-2xl">
                  {openIndexes.includes(index) ? '−' : '+'}
                </span>
              </button>
              <div 
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: openIndexes.includes(index) ? '1000px' : '0' }}
              >
                <p className="p-md text-stone-400 px-[25px] pb-[25px]">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
