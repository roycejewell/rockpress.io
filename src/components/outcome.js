import React from 'react';

const Outcome = ({ children }) => {
  return (
    <section className="bg-black border border-stone-800 rounded-[25px] p-[25px] flex items-start justify-start flex-wrap">
        {children}
    </section>
  );
};

export default Outcome;
