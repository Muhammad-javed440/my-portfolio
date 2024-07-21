"use client";
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import Typewriter from 'typewriter-effect';
const Hero = () => {
  return (
    <> 
    <div>
   
   <section className="text-gray-600 body-font bg-grey-100">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        I am 
        <br className="hidden lg:inline-block" />
        
        <Typewriter
  options={{
    strings: ['Web Developer','and','Software Engineer'],
    autoStart: true,
    loop: true,
  }}
/>
        <div className="w-[100px] h-[2px] bg-blue-700"></div>
      </h1>
      <p className="mb-8 leading-relaxed">
        I am currently pursuing my degree in Software Engineering. My journey into the world of technology began with a fascination for how software can solve real-world problems and improve people's lives. Throughout my studies, I have developed a strong foundation in programming, software development methodologies, and system design.

When I am not coding, I enjoy exploring new technologies, contributing to open-source projects, and collaborating with fellow students on exciting tech projects. In my free time, I also love reading about the latest trends in technology and innovation.
  
        
      </p>
      <div className="flex justify-center">
        <Link href={"#Contact"}>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Contact
        </button>
        </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded mx-auto w-[20rem]"
        alt="hero"
        src={require("../../../public/logo/javed.jpg")}
        width={300}
        height={300}
      />
    </div>
  </div>
</section>


    </div>
    </>
  )
}

export default Hero
