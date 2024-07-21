import React from 'react'
import Image from 'next/image'
import { FaCloudDownloadAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
    <div className="bg-white z-50 sticky top-0">
  
  <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center bg-blue-100">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <Image 
        src={require("../../../public/logo/th.jpg")} 
        alt="IT Mate" 
        width={70} 
        height={70}
        className='rounded'
        />

        <span className="ml-3 text-xl">It Mate World </span>
      </a>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <a href={"/"} className="mr-5 hover:text-blue-300">Home</a>
        <a href={"#about"} className="mr-5 hover:text-blue-300">About</a>
        <a href={"#skill"} className="mr-5 hover:text-blue-300">Skills</a>
        <a href={"#project"} className="mr-5 hover:text-blue-300">Projects</a>
        <a href={"#Contact"} className="mr-5 hover:text-blue-300">Contact</a>
      </nav>
        <a href="/logo/mycv.pdf">
      <button className="inline-flex items-center bg-blue-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
        Download CV
        <FaCloudDownloadAlt className='text-xl ml-2' />
      </button>
        </a>
    </div>
  </header>
    </div>
    
</>

  )
}

export default Navbar
