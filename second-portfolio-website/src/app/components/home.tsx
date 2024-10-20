/* eslint-disable react/no-unescaped-entities */
"use client";

import Typewriter from 'typewriter-effect';
import { FaFacebook, FaLinkedin, FaGithub, } from 'react-icons/fa';
import React from 'react';
import Image from 'next/image';
import Profile from "../../../public/shahrozpic.jpeg"
import Link from 'next/link';




const Home = () => {


  return (
    <>

            

<div className='flex flex-col-reverse items-center md:justify-between md:mt-10 md:flex-row md:px-8 lg:px-0 md:pt-10 lg:pt-0'>

<div className='w-full p-4 md:w-[50%] md:mt-0 md:p-0 h-fit'>
<h3 className=' text-xl font-bold'>Hello,It's Me</h3>
<h1 className='text-3xl md:text-3xl lg:text-4xl font-bold mt-1'><span className='text-[#0a6335] font-bold'>Muhammad</span> Shahroz</h1>

<h3 className='text-xl font-bold mt-2'>
  And I'm a <span className='inline-block md:font-extrabold'>
    <Typewriter
      options={{
        strings: ['Frontend Developer'],
        autoStart: true,
        loop: true,
        wrapperClassName: 'typewriter-text', 
      }}
    />
  </span>
</h3>



<p className='mt-1 md:mt-3 w-[100%] text-sm'>I’m a Frontend Developer skilled in building responsive, user-friendly web applications. Proficient in HTML, CSS, JavaScript, React, and Next.js, I focus on writing clean code and creating seamless, intuitive interfaces.</p>

<ul className='mt-6 flex space-x-3 items-center border-b-green-800 border-b-[1px] pb-8'>

<Link href="https://www.linkedin.com/in/muhammad-shahroz-a35b68292/"><FaLinkedin className='hover:text-[#0a6335]' size={30} /></Link>
<Link href="https://www.facebook.com/muhammad.shahroz.58"><FaFacebook className='hover:text-[#0a6335]' size={30} /></Link>
<Link href="https://github.com/Muhammad-Shahr0z"><FaGithub className='hover:text-[#0a6335]' size={30} /></Link>

<a href="/shahrozsCv.pdf" download className='bg-[#0a6335] flex justify-center items-center text-white h-8 w-36 rounded-md font-bold text-center p-1 text-[.8rem] active:scale-[.97] hover:bg-white hover:text-[#0a6335]'>
<Typewriter
      options={{
        strings: ['Download CV'],
        autoStart: true,
        loop: true,
        wrapperClassName:'download-cv',
       }}
    /></a>

</ul>
</div>


<div className='md:w-[50%] md:flex md:justify-end w-full mx-auto flex justify-center'>
  <Image src={Profile}alt='profile'height={300} className=' image-filter-green mb-6 mt-8 md:mt-0 rounded-2xl  border-4 p-[2px] opacity-95 shadow-lg 
  shadow-[#0a6335]  border-[#0a6335] bg-white'/>
</div>



</div>
 

   

     
    </>
  );
}

export default Home;
