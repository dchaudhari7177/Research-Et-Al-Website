import React, { useEffect } from 'react';
import pic from '/one.png'

export default function AboutUs() {
    return (
        <div className="flex flex-row w-screen h-screen items-center justify-between grow-0 bg-[#372874] text-white text-xl pl-20 pr-10 py-20">
            <div className='flex flex-col items-start justify-center h-full mt-15.5 ml-12 w-3/5' style={{fontFamily: "'League Spartan', sans-serif", color: "#f0edfa"}}>
                <h1 className='text-7xl font-[800] mt-20' >About Us</h1>
                <p className='text-xl pt-10 mr-20'> 
                    <strong>Research Et Al</strong> is a vibrant platform for students <strong>passionate about research</strong>, 
                    aiming to demystify its complexities. <br/>Through <strong>workshops</strong>, <strong>lectures</strong>, and <strong>competitions</strong>, 
                    they cultivate a culture of <strong>collaboration and intellectual growth</strong>. Unique events 
                    like <strong>Paper Talks</strong> and the podcast <strong>Erudio</strong> offer insights from experts, empowering 
                    a new generation to translate curiosity into something valuable and tangible - <br/><br/> <strong className='text-2xl'>a Research Paper ~</strong>
                </p>
            </div>
            <div className='w-2/5 flex flex-row justify-end mr-20 mt-12'>
                <div className='transition hover:scale-110 ease-in-out duration-700'> <img src={pic} height='370' width='370' /> </div>
            </div>
        </div>
    );
}