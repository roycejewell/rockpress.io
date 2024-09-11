import React, { useState } from 'react';

const FormModal = ({ header, copy, cta, onClose, onSubmit }) => {
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // New state to track submission

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    onSubmit(email);
    setSuccessMessage('Good things to come! We will be in touch shortly.');
    setIsSubmitted(true); // Set submission state to true
  };

  const handleClose = () => {
    setSuccessMessage(''); // Reset success message when closing
    setIsSubmitted(false); // Reset submission state when closing
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50" onClick={handleClose}>
      <div className="bg-black w-[500px] p-[25px] md:p-[50px] rounded-[25px] relative mx-[25px] md:mx-0 border-stone-800 border-[1px]" onClick={(e) => e.stopPropagation()}>
        <button className="absolute top-[25px] right-[25px]" onClick={handleClose}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-[25px] w-[25px] text-lime-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-white mb-[25px]">{header}</h2>
        {successMessage && <p className="text-lime-400 mb-[25px]">{successMessage}</p>}
        {!isSubmitted && ( // Show form only if not submitted
          <form onSubmit={handleSubmit}>
            <input type="email" name="email" className="w-full border border-stone-800 bg-transparent h5 text-lime-400 p-[15px] mb-[10px] rounded-[10px]" placeholder="Enter your email" required />
            <button type="submit" className="p-[15px] bg-lime-400 w-full text-black block h5 hover:bg-stone-900 hover:text-lime-400 rounded-[10px]">{cta}</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default FormModal;