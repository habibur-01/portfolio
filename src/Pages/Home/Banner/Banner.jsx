import React from 'react';
import { FaFacebookF, FaLinkedin, FaLinkedinIn, FaReact, FaTwitter } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import banner1 from "../../../assets/img/banner1.png"


const Banner = () => {
    return (
        <div className='h-[800px] flex justify-around items-center border-b-2 border-[#191c20]'>
            <div className='text-[#f1f0f0] w-[50%] '>
                <div className='w-full'>
                    <p className='uppercase text-md mb-6'>Greetings in my Globe</p>
                    <h1 className='text-5xl mb-6 font-medium'>Hi, I am <span className='text-[#F9004D]'>H</span>abibur <span className='text-[#F9004D]'>R</span>ahman <span className='text-[#F9004D]'>Z</span>ihad <br /> a <span> Front-End Developer</span></h1>
                    <p className='mb-16'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea perferendis in aperiam odit dolores. Quidem, delectus similique voluptatibus ex odit repellat hic facilis reprehenderit, at, nam dolor adipisci vel. Quam.</p>
                    <div className='flex justify-evenly '>

                        <div className='space-y-4'>
                            <h1 className='uppercase text-sm'>Connect with me</h1>
                            <div className='flex gap-2'>
                                <p className='btn bg-[#191c20] text-white shadow-slate-100 border-none hover:text-black'><FaFacebookF /></p>
                                <p className='btn bg-[#191c20] text-white shadow-slate-100 border-none hover:text-black'> <FaTwitter /></p>
                                <p className='btn bg-[#191c20] text-white shadow-slate-100 border-none hover:text-black'> <FaLinkedinIn /></p>
                            </div>

                        </div>
                        <div className='space-y-4'>
                            <h1 className='uppercase text-sm'>Favourite</h1>
                            <div className='flex gap-2'>
                                <p className='btn bg-[#191c20] text-white shadow-slate-100 border-none hover:text-black'><FaReact /></p>
                                <p className='btn bg-[#191c20] text-white shadow-slate-100 border-none hover:text-black'><SiTailwindcss /></p>

                            </div>

                        </div>


                    </div>
                </div>
            </div>
            <div className='flex-1 relative'>
                <div className='flex justify-center'>
                    <div className="card w-[500px] h-[500px] bg-[#1E2125] shadow-xl">
                        <div className='w-full'>
                            <figure>
                                <img src={banner1} alt="user image" className='absolute bottom-0' />
                            </figure>
                        </div>


                    </div>

                </div>


            </div>
            


        </div>
    );
};

export default Banner;