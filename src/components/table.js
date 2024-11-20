import React from 'react';

const ComparisonTable = () => {
    return (
        <div className="max-w-5xl bg-black mx-auto rounded-[25px] overflow-x-auto my-[100px]">
            <h2 className='text-center mx-auto mb-[50px]'>Why Marketing Teams Choose Us.</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[25px] px-[25px] lg:px-0'>
                <div className='bg-lime-400 rounded-[25px] p-[25px] md:p-[50px] flex items-center justify-center h-[300px]'>
                    <h3 className='h2 text-black'>💰 Half the agency price. None of the contracts.</h3>
                </div>
                <div className='bg-black rounded-[25px] p-[25px] border border-lime-400 md:p-[50px] flex items-center justify-center h-[300px]'>
                    <h3 className='h2 text-lime-400'>⚡ Quality work, delivered in days — not weeks.</h3>
                </div>
                <div className='bg-white rounded-[25px] p-[25px] md:p-[50px] flex items-center justify-center h-[300px]'>
                    <h3 className='h2 text-black'>🎯 We integrate and feel like a full-time hire.</h3>
                </div>
                <div className='bg-lime-700 rounded-[25px] p-[25px] md:p-[50px] flex items-center justify-center h-[300px]'>
                    <h3 className='h2 text-white'>💪 Enterprise capability, without enterprise cost.</h3>
                </div>
            </div>
        </div>
    );
};

export default ComparisonTable;