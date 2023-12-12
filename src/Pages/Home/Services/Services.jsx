import React, { useState } from 'react';
import TitleCaption from '../../../Hooks/TitleCaption';
import axios from 'axios';
import { FaArrowRight } from 'react-icons/fa';
// const axios = require('axios');


const Services = () => {
    const [data, setData] = useState([])
    console.log(data)
    axios.get('/tools.json')
        .then(function (response) {
            // handle success
            console.log(response);
            setData(response.data)

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

    return (
        <div id='services'>
            <TitleCaption subTitle={'Features'} mainTitle={'What Can I Do'}></TitleCaption>

            <div className='mt-14 grid grid-cols-3 gap-y-10'>
                {
                    data.map(tool => <div className="card w-96 bg-[#1E2125] text-[#f1f0f0] shadow-xl hover:bg-gradient-to-r from-[#1E2125] to-[#141416] hover:-translate-y-3  hover:shadow-xl duration-300" key={tool.tool}>

                        <div className="card-body">
                            <div className='flex'>
                            <figure className='w-16 h-16'><img src={tool.toolImg} className='w-16 h-16 text-[#F9004D]' alt="Tool Icon" /></figure>
                            <p className='text-[#F9004D] text-right'>{tool.status}</p>
                            </div>
                            <h2 className="card-title">{tool.tool}</h2>
                            <p>{tool.description}</p>
                            <div className="card-actions justify-end">
                                <button className="text-[#F9004D] hidden hover: "><FaArrowRight /></button>
                            </div>
                        </div>
                    </div>)
                }


            </div>

        </div>
    );
};

export default Services;