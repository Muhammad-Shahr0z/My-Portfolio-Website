"use client"
import Link from "next/link"
import Image from "next/image"
import Logo from "../../../public/logo.png"
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import { useState } from "react";


const Header = () => {
  const [isActive, setisActive] = useState(true)
  return (
    
  <header className="md:flex md:items-center md:justify-between md:px-4 md:py-3 lg:py-0 lg:px-0">


    {/* CHILED 01 */}
   

  <div className="p-4  md:p-0 flex justify-between items-center h-24 md:flex md:items-center md:justify-center] lg:mt-0 lg:mx-0">
 <Image src={Logo} width={60} alt="logo" className="md:w-[70px]"/>
  </div> 


 {/* CHILED 02 */}
  <nav className="hidden md:block md:px-4 lg:px-0">
    <ul className="md:flex flex space-x-7  text-white text-[1rem] md:text-[16px]">
      
      <Link href="/" className="cursor-pointer hover:text-[#0a6335] font-semibold border-b-2 border-transparent hover:border-[#0a6335]">Home</Link>
      <Link href="about" className="cursor-pointer hover:text-[#0a6335] font-semibold border-b-2 border-transparent hover:border-[#0a6335]">About</Link>
      <Link href="skills" className="cursor-pointer hover:text-[#0a6335] font-semibold border-b-2 border-transparent hover:border-[#0a6335]">Skills</Link>
      <Link href="project" className="cursor-pointer hover:text-[#0a6335] font-semibold border-b-2 border-transparent hover:border-[#0a6335]">Projects</Link>
      <Link href="contact" className="cursor-pointer hover:text-[#0a6335] font-semibold border-b-2 border-transparent hover:border-[#0a6335]">Contact</Link>
    </ul>
  </nav>

 {/* CHILED 03 */}

 {/* NavBar For SMall Devices */}

  <nav className="md:hidden">{!isActive ?  <MdCancel size={50} className="absolute top-0 right-0 z-30 mt-4 mr-4"  onClick={()=>{
      setisActive(!isActive)
    }}/>

    :<GiHamburgerMenu size={50} className="absolute top-0 right-0  z-30   mt-4 mr-4"  onClick={()=>{
      setisActive(!isActive)
    }}/>}

 
  
    <ul className={`${isActive ? 'hidden':'flex'} flex-col  justify-center items-center  text-white text-[1.5rem] bg-[#0a6335] bg-opacity-55 absolute top-0 w-full py-4 rounded-b-3xl z-10`}>
      <Link href="/" className="hover:bg-[#0a6335] w-full p-1 text-center cursor-pointer md:hover:text-[#0a6335] font-semibold border-b-2 border-transparent md:hover:border-[#0a6335]">Home</Link>
      <Link href="about" className="hover:bg-[#0a6335] w-full p-1 text-center cursor-pointer md:hover:text-[#0a6335] font-semibold border-b-2 border-transparent md:hover:border-[#0a6335]">About</Link>
      <Link href="skills" className="hover:bg-[#0a6335] w-full p-1 text-center cursor-pointer md:hover:text-[#0a6335] font-semibold border-b-2 border-transparent md:hover:border-[#0a6335]">Skills</Link>
      <Link href="project" className="hover:bg-[#0a6335] w-full p-1 text-center cursor-pointer md:hover:text-[#0a6335] font-semibold border-b-2 border-transparent md:hover:border-[#0a6335]">Projects</Link>
      <Link href="contact" className="hover:bg-[#0a6335] w-full p-1 text-center cursor-pointer md:hover:text-[#0a6335] font-semibold border-b-2 border-transparent md:hover:border-[#0a6335]">Contact</Link>
    </ul>
  </nav>

    </header>  
   
  )
}

export default Header