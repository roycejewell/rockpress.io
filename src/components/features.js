import React from 'react';

const Features = ({ header, copy, featureGroups }) => {
  return (
    <section className="py-[25px] md:py-[50px] bg-black">
      <div className="max-w-5xl mx-auto px-[25px] lg:px-[0px]">
        <div className="mb-[50px]">
          <div className="text-left col-span-1 pr-[15px] mb-[25px]">
            <h2 className="h2 mb-[25px]">{header}</h2>
            <p className="p-md text-stone-400 max-w-[500px]">{copy}</p>
          </div>
          <div className="grid grid-cols-2 gap-[15px] mt-[25px] md:mt-[100px]">
            {featureGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="flex flex-col items-start justify-start bg-stone-900 border border-stone-800 p-[25px] rounded-[10px]">
                <h3 className="h4 !font-bold text-lime-400 mb-[15px]">{group.groupHeader}</h3>
                {group.features.map((feature, featureIndex) => (
                  <h4 key={`${group.groupHeader}-${featureIndex}`} className="p text-left text-white mb-[10px] flex items-center">
                    {feature.header}
                    </h4>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
