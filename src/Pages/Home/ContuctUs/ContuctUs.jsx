import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import contactbg from "../../../assets/img/contactus.jpg"
import TitleCaption from '../../../Hooks/TitleCaption';

export const ContactUs = () => {

    // const bg ={
    //     backGround:`url(${contactbg})`,
    //     height: 500,
        
    // }
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2hf00aa', 'template_442j48o', form.current, 'GBo7g0wdk10B6FC70')
            .then((result) => {
                console.log(result.text);
                toast('Send Successfuly')
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='text-[#db4242] border-b-2 mb-8' id='contact'>
            <ToastContainer></ToastContainer>
            <TitleCaption subTitle={'contact'} mainTitle={'Contact With Me'}></TitleCaption>
            <div className=' mt-12 bg-cover bg-center relative' >
                {/* <figure className='h-[400px]'> 
                    <img src={contactbg} alt="" className='w-full object-fill rounded-lg h-[500px]' />
                </figure> */}
                
                <div className=' w-full border-2 bg-[#1E2125] bg-blend-overlay flex justify-center h-[500px] items-center top-0'>
                    <form ref={form} onSubmit={sendEmail} className='space-y-2'>
                        <label >Name</label><br />
                        <input className='input text-black' type="text" name="user_name" /><br />
                        <label>Email</label><br />
                        <input className='input text-black' type="email" name="user_email" /><br />
                        <label>Message</label><br />
                        <textarea name="message" className='text-black' /><br></br>
                        <input className='btn bg-[#191c20] text-[#d64545]' type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </div>
    );
};