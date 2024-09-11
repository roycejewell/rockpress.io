import React, { useState } from 'react';
import FormModal from './form';
import { trackEvent } from 'fathom-client';

const Pricing = ({ title, ctaText, copy, ctaLink, pricingOptions }) => {
  const [selectedOption, setSelectedOption] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  const toggleOption = () => {
    setSelectedOption(selectedOption === 0 ? 1 : 0);
  };

  const currentOption = pricingOptions[selectedOption];

  const openModal = (option) => {
    setModalContent(option);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  console.log(trackEvent);

  const handleSubmit = (email) => {
    console.log(`Submitted email: ${email} for ${modalContent.header}`);
    
    // Submit a Fathom Analytics event
    trackEvent(email + ' ' + modalContent.header + ' ' + new Date().toISOString());

    setSuccessMessage('Good things to come. We will be in touch shortly.');
    // Optionally close the modal after a delay
    // setTimeout(closeModal, 3000);
  };

  return (
    <section className="py-[50px] bg-black relative">
      <span className="absolute top-[-75px]" id='pricing'></span>
      <div className="max-w-5xl mx-auto px-[25px] lg:px-[0px]">
        <div className="grid grid-cols-1 md:grid-cols-5 md:gap-[50px]">
          {/* Left Section */}
          <div className="md:col-span-2 flex flex-col justify-center bg-lime-400 rounded-[25px] p-[50px] relative mb-[25px] md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="28" fill="currentColor" className="absolute h-[75px] w-[75px] bottom-[25px] right-[25px] text-black">
              <path d="M14.707 10.707a.997.997 0 0 0 0-1.414L10.464 5.05A1 1 0 0 0 9.05 6.464L11.586 9H6a1 1 0 1 0 0 2h5.586L9.05 13.536a1 1 0 0 0 1.414 1.414l4.243-4.243zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"></path>
            </svg>
            <h2 className="h2 mb-[15px] text-black">{title}</h2>
            
            <p className="p-md text-stone-800 mb-[15px]">{copy}</p>
          </div>

          {/* Right Section - Pricing Card */}
          <div className="md:col-span-3 border border-stone-800 rounded-[25px] p-[25px] md:p-[50px] flex flex-col items-start">
            <div className="inline-flex items-center mb-[25px] border border-stone-800 px-[15px] py-[5px] rounded-full">
              <div className="w-[10px] h-[10px] rounded-full bg-red-500 mr-2 animate-pulse"></div>
              <span className='text-xs text-lime-400'>2 Seats Remaining</span>
            </div>
            <h3 className="h3 mb-[25px] text-center">Membership</h3>
            
            {/* Toggle */}
            <div className="flex justify-center mb-[25px]">
              <button 
                onClick={toggleOption}
                className="flex items-center space-x-2 bg-black border border-stone-800 rounded-full px-[10px] py-[10px]"
              >
                <span className={`px-[15px] py-[10px] rounded-full transition-all  ${selectedOption === 0 ? 'bg-lime-400 text-black' : 'bg-black text-lime-400'} whitespace-nowrap flex items-center`}>
                  <span className="h5">{pricingOptions[0].header}</span>
                </span>
                <span className={`px-[15px] py-[5px] rounded-full transition-all ${selectedOption === 1 ? 'bg-lime-400 text-black' : 'bg-black text-lime-400'} whitespace-nowrap flex items-center`}>
                  <span dangerouslySetInnerHTML={{ __html: pricingOptions[1].icon }} className="" />
                  <span className="h5">{pricingOptions[1].header}</span>
                </span>
              </button>
            </div>

            <p className="h2 text-left mb-[15px]">{currentOption.price}</p>
            <p className="p-md text-stone-400 text-left mb-[25px]">{currentOption.description}</p>

            {/* List Items */}
            <ul className="grid grid-cols-2 gap-[15px] mb-[25px]">
              {currentOption.listItems.map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-[5px] text-lime-400" dangerouslySetInnerHTML={{ __html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -7 24 24" width="28" fill="currentColor"><path d="M5.486 9.73a.997.997 0 0 1-.707-.292L.537 5.195A1 1 0 1 1 1.95 3.78l3.535 3.535L11.85.952a1 1 0 0 1 1.415 1.414L6.193 9.438a.997.997 0 0 1-.707.292z"></path></svg>' }} />
                  <span className="p font-medium text-white">{index === 0 ? <strong className='text-lime-400'>{item}</strong> : item}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-row items-center justify-start mt-auto">
              <button 
                data-tally-hide-title="1"
                data-tally-open="n0vJ89"
                data-tally-width="450"
                data-tally-layout="modal" 
                className="button h5 mr-[15px]"
              >
                {currentOption.cta.text}
              </button>
              <button 
                data-tally-open="nWYM8e" 
                data-tally-width="450"
                data-tally-layout="modal" 
                data-tally-hide-title="1"
                className="h5 underline"
              >
                {currentOption.secondaryCta.text}
              </button>
            </div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <FormModal
          header={modalContent.header}
          copy={modalContent.copy}
          cta={modalContent.cta}
          onClose={closeModal}
          onSubmit={handleSubmit}
          successMessage={successMessage} // Pass success message to FormModal
        />
      )}
    </section>
  );
};

export default Pricing;