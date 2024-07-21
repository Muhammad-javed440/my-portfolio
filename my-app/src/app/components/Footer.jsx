import Link from 'next/link';
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import Image from 'next/image';
import { SiGmail } from "react-icons/si";
const Footer = () => {
  return (
    <div className="bg-blue-50">
      <><footer className="text-gray-600 body-font">
  <div className="container px-4 py-8 mx-auto flex items-center sm:flex-row flex-col ">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-blue-300">
     
    <Image
 src={require("../../../public/logo/th.jpg")} 
 alt="IT Mate" 
 width={50} 
 height={50}
 className='rounded'
 />
     
      <span className="ml-3 text-xl">IT Mate World</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">&copy;  &mdash;
      <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank"> 2024 IT Mate World</a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <div className="container px-3">
      <Link target="_blank" href={'https://www.facebook.com/meherjaved440'} className="text-gray-500">
        
      <FaFacebook className='text-3xl hover:text-[#4a82dc]'/>
        
      </Link>
      </div>
      <div className="container px-3">
      <Link target="_blank" href={'https://www.youtube.com/@meherjaved440'} className="text-gray-500">
   
   <FaYoutube  className='text-3xl hover:text-[#ff0000]'/>
     
   </Link>
   </div>
   <div className="container px-3">
   <Link target="_blank" href={'https://github.com/Muhammad-javed440/'} className="text-gray-500">
   
   <FaGithub  className='text-3xl hover:text-[#0b0404]'/>
     
   </Link>
   </div>
   <div className="container px-3">
   <Link target="_blank" href={'https://www.linkedin.com/in/muhammad-javed-383914200/'} className="text-gray-500">
   
   <FaLinkedin className='text-3xl hover:text-[#2d4f92]'/>
     
   </Link>
   </div>
   <div className="container px-3">
<Link target="_blank" href={'https://web.whatsapp.com/'} className="text-gray-500">
   
<FaWhatsappSquare className='text-3xl hover:text-[#4bed81]'/>
  
</Link>
</div>
<div className="container px-3">
<Link target="_blank" href={'https://mail.google.com/mail/u/0/#inbox'} className="text-gray-500">
   
<SiGmail className='text-3xl hover:text-[#467fdb]'/>
  
</Link>
</div>

    </span>
  </div>
</footer>
</>
    </div>
  )
}

export default Footer
