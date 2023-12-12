import React from 'react';
import TitleCaption from '../../../Hooks/TitleCaption';

const Resume = () => {

    const btnPrime = {
        backgroundColor: "#212428", // Fix the property name and add a semicolon
        border: "none",
        boxShadow: "4px 0px 10px rgba(240, 239, 239, 0.1)",
        color: "#F9004D",
    }

    return (
        <div id='resume' className='border-b-2 border-[#191c20]'>
            <div className='text-center'>
                <TitleCaption subTitle={'Resume'} mainTitle={'My Resume'}></TitleCaption>
            </div>
            <div className='text-[#f1f0f0] flex justify-between mb-24 mt-10'>
                <div className='w-[50%]'>
                    <h1 className=' text-3xl my-8'>Education Quality</h1>
                    <div className='p-8 mb-3 bg-[#1E2125] rounded-md mr-6'>
                        <h1 className='text-2xl font-medium'>BSc in Computer Science & Engineering</h1>
                        <p className='text-base '>Daffodil International University(2020-2024)</p>
                        <p className='text-base'>CGPA: 3.57 out of 4</p>
                    </div>
                    <div className='p-6 mb-3 bg-[#1E2125] rounded-md mr-6'>
                        <h1 className='text-2xl font-medium'>Higher Secondary Certificate </h1>
                        <p className='text-base '>Panchkandi College(2016-2018)</p>
                        <p className='text-base'>CGPA: 4.42 out of 5</p>
                    </div>
                    <div className='p-6 bg-[#1E2125] rounded-md mr-6'>
                        <h1 className='text-2xl font-medium '>Secondary School Certificate</h1>
                        <p className='text-base '>Chalakchar High School(2011-2016)</p>
                        <p className='text-base'>CGPA: 5 out of 5</p>
                    </div>
                </div>
                 
                {/* <div className='mt-12 border-r-2 border-[#191c20]'>
                    <hr/>
                </div> */}
                <div className='flex-1'>
                    <h1 className=' text-3xl my-8 ml-6'>Experience</h1>
                    <div className='p-8 mb-3 bg-[#1E2125] rounded-md ml-6'>
                        <h1 className='text-2xl font-medium'>As a Freelancer</h1>
                        <p className='text-base '>Completed Two Works</p>
                        <p className='text-base'>Job Type: Data Entry</p>
                    </div>
                    <div className='p-6 mb-3 bg-[#1E2125] rounded-md ml-6'>
                        <h1 className='text-2xl font-medium'>CO-CURRICULAR ACTIVITIES</h1>
                        <p className='text-base '>Member | DIU CPC(Computer & Programming Club)</p>
                        <p className='text-base'>ClubDaffodil International University </p>
                    </div>
                    <div className='p-6 mb-3 bg-[#1E2125] rounded-md ml-6'>
                        <h1 className='text-2xl font-medium'>PROJECT/THESIS:</h1>
                        <p className='text-base pb-6'>Fake News Detection Using Machine Learning(Thesis)</p>     
                        
                    </div>
                    
                </div>

            </div>

            <div className='flex justify-center mb-24'> 
                <button className='btn-prime px-6 py-3 rounded-md hover:-translate-y-3'><a href="https://drive.google.com/file/d/1qYO3i5wGyqnYfKTC0M9Zso4pl19QKkmx/view?usp=sharing" download target='blank'>Download CV</a></button>
            </div>
            
        </div>
    );
};

export default Resume;