"use client"

import Image from 'next/image'
import Link from 'next/link'
import { MdMenuOpen } from "react-icons/md";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import React, { useState } from 'react'

const Header = () => {


  const [animat, setAnimat] = useState<boolean>(true)

  const skillsAnimation = () => {
    setAnimat(false)
  }


  
  const [show, setshow] = useState(true)

  const toggleMenu =()=>{
    setshow(false)
    console.log("click menu");
    
  }
   
  const toggleCancel =()=>{
    setshow(true)
  }
   


  return (
  
  
    <header>
    <div className="logo">
      <a href="/index.html"><Image alt='logo' src="/images/logo.png" width={50} height={65}/></a>
      <a className='hidden1' href="/index.html"><p><strong>Muhammad</strong> <span>Shahroz</span></p></a>
    </div>
    {/* <!-- Navbar Html Code --> */}
    <nav className="navBar1">
      <ul>
        <li><Link href="/" target="_self">Home</Link></li>
        <li><Link href="/about" target="_self">About</Link></li>
        <li><Link href="/skill" target="_self" onClick={skillsAnimation}>Skills</Link></li>
        <li><Link href="/projects" target="_self">Projects</Link></li>
 
      </ul>
    </nav>

    <button id='menu-button' onClick={toggleMenu}><MdMenuOpen /></button>

    {/* className={`innernextjs ${isLoaded ? 'animateNextjs' : ''}`} */}

    
    <nav className={` block1 ${show ? 'hidden':'block'}`}>
      <ul>
        <li><Link href="/" target="_self">Home</Link></li>
        <li><Link href="/about" target="_self">About</Link></li>
        <li><Link href="/skill" target="_self">Skills</Link></li>
        <li><Link href="/projects" target="_self">Projects</Link></li>
        <button id="menuCancel" onClick={toggleCancel}><FaArrowUpFromBracket/></button>
      </ul>
    </nav>  

    
  </header>
  
    
    
    
    
    
    
    
    
    

  )
}

export default Header;