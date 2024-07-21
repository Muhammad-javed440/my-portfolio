import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        src={require("../../../public/logo/javed1.jpg")}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About Me
      </h1>
      <p className="mb-5  leading-relaxed">
      Hello! I am a passionate software engineer with a deep love for coding. My journey in the world of technology has equipped me with a robust skill set, including HTML, JavaScript, TypeScript, Next.js, Tailwind CSS, CSS, and Bootstrap.

I thrive on creating seamless and efficient web applications, continuously exploring new technologies to enhance my projects. Whether I am working on the front-end or diving into full-stack development, I am committed to delivering high-quality code and innovative solutions.

In my free time, I enjoy staying updated with the latest industry trends and contributing to open-source projects. Let s connect and create something amazing together!


        chambray.
      </p>
      <div className="flex justify-center">
        <Link href={"/logo/mycv.pdf"}>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          View CV
        </button>
        </Link>
      </div>
      
    </div>
  </div>
</section>

    </div>
  )
}

export default About
