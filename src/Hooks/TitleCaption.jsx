import React from 'react';

const TitleCaption = ({subTitle, mainTitle}) => {
    return (
        <div className='mt-32 space-y-6'>
            <p className='text-base text-[#F9004D] uppercase'>{subTitle}</p>
            <h1 className='text-[#f1f0f0] text-5xl font-semibold'>{mainTitle}</h1> 
        </div>
    );
};

export default TitleCaption;