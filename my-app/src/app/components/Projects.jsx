import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <div id="project">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              My Projects
            </h1>
          </div>
          <div className="flex flex-wrap -m-5 -mt-[5rem] ">
            {/*Project*/}
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-move">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/logo/Screen2.png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    The Nature of World
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    The Nature
                  </h1>
                  <p className="leading-relaxed">
                    This Project is about the nature of the world.
                  </p>
                  <Link
                    target="_blank"
                    href="https://newsapp-j3uttvtl4-muhammad-javeds-projects-d75ad252.vercel.app/"
                  >
                    <p className="leading-relaxed  text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-move">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/logo/Screen1.png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    The Nature of World
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    The Nature
                  </h1>
                  <p className="leading-relaxed">
                    This Project is about the nature of the world.
                  </p>
                  <Link
                    target="_blank"
                    href="https://newsapp-j3uttvtl4-muhammad-javeds-projects-d75ad252.vercel.app/"
                  >
                    <p className="leading-relaxed  text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-3 cursor-move">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/logo/Screen.png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    The Nature of World
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    The Nature
                  </h1>
                  <p className="leading-relaxed">
                    This Project is about the nature of the world.
                  </p>
                  <Link
                    target="_blank"
                    href="https://newsapp-j3uttvtl4-muhammad-javeds-projects-d75ad252.vercel.app/"
                  >
                    <p className="leading-relaxed line-clamp-2 text-blue-500 hover:underline">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
