import React from "react";

const PageIntro = ({ img, title, text}) => {
  return (
      <div className='mb-[15px] md:mb-[30px]'>
        <img title={title} alt={title} src={img} className='rounded-lg mb-[15px] md:mb-[30px]'/>
        <h1 className='mb-[10px] md:mb-[15px]'>{title}</h1>
        <p className='p-lg'>{text}</p>
      </div>
  );
};

export default PageIntro;