import React from 'react'

const Skill = () => {
  return (
    <div id="skill">
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
        Skills
      </h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
    Skills
      </h1>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">

            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              HTML
            </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">
            HTML, or HyperText Markup Language, is the standard language used to create and design documents on the World Wide Web. It provides the structure of a webpage, allowing content such as text, images, videos, and links to be displayed in a web browser.

Basic Structure of an HTML Document
An HTML document is made up of various elements, each defined by tags. These tags help browsers understand how to display the content. Here’s a simple example of an HTML document:

html
            </p>
            <a className="mt-3 text-indigo-500 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">

            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              JavaScript
            </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">
            JavaScript is a versatile, high-level programming language primarily used to create and control dynamic content on websites. Unlike HTML and CSS, which are used to structure and style web pages, JavaScript allows developers to make their websites interactive and responsive. It is a core technology of the World Wide Web, alongside HTML and CSS.
            Interactivity: JavaScript can create interactive elements such as forms, games, and other applications that respond to use
            </p>
            <a className="mt-3 text-indigo-500 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Nextjs
            </h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">
            Next.js is a popular open-source React framework that enables developers to build server-side rendering (SSR) and static web applications with ease. Created by Vercel, it combines the best features of React with a powerful toolkit for building modern, optimized web applications.
            Server-Side Rendering (SSR): Automatically generates HTML on the server for each request, improving SEO and performance.
Static Site Generation (SSG): Pre-renders pages at build time, making them highly performant.
            </p>
            <a className="mt-3 text-indigo-500 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default Skill
