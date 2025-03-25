import React, { useEffect } from 'react';
import pic from '/one.png'

export default function AboutUs() {
    return (
        <div className="flex flex-col md:flex-row w-full min-h-screen items-center justify-between bg-[#372874] text-white px-6 md:px-20 py-24 md:py-20">
            <div className='flex flex-col items-start justify-center w-full md:w-3/5 md:ml-12' 
                style={{fontFamily: "'League Spartan', sans-serif", color: "#f0edfa"}}>
                <h1 className='text-4xl md:text-7xl font-[800] mt-10 md:mt-20'>About Us</h1>
                <p className='text-lg md:text-xl pt-6 md:pt-10 md:mr-20'> 
                    <strong>Research Et Al</strong> is a vibrant platform for students <strong>passionate about research</strong>, 
                    aiming to demystify its complexities. <br className="hidden md:block"/>Through <strong>workshops</strong>, <strong>lectures</strong>, and <strong>competitions</strong>, 
                    they cultivate a culture of <strong>collaboration and intellectual growth</strong>. Unique events 
                    like <strong>Paper Talks</strong> and the podcast <strong>Erudio</strong> offer insights from experts, empowering 
                    a new generation to translate curiosity into something valuable and tangible - 
                    <br className="hidden md:block"/><br/>
                    <strong className='text-xl md:text-2xl'>a Research Paper ~</strong>
                </p>
            </div>
            <div className='w-full md:w-2/5 flex justify-center md:justify-end mt-12 md:mr-20'>
                <div className='transition hover:scale-110 ease-in-out duration-700'>
                    <img 
                        src={pic} 
                        className="w-[280px] h-[280px] md:w-[370px] md:h-[370px] object-contain"
                        alt="About Us illustration" 
                    />
                </div>
            </div>
        </div>
    );
}