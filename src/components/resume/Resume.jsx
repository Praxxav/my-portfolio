import React from "react";

const Resume = () => {
  return (
    <div id="resume" className="container mx-auto mt-16 px-4">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">Resume</h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="flex flex-col md:flex-row justify-between items-start w-full">
        <p className="text-gray-700 font-medium w-full">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card */}
      <div className="card-wrapper w-full mt-5 flex flex-col md:flex-row gap-5 mx-auto">
        {/* Certificate Section */}
        <div className="left flex-1 flex items-center justify-center p-4 md:p-6">
          <fieldset
            data-aos="zoom-in"
            className="w-full max-w-[80%] p-5 py-12 sm:py-8 sm:p-2 bg-white border-2 border-gray-200 rounded-lg shadow-md"
          >
            <legend className="border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Certificate
            </legend>
            <div className="relative">
              {/* design */}
              <div className="design flex absolute left-[-120px] top-1/2 items-center rotate-[90deg] sm:left-[-130px]">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[200px] bg-gray-300 h-[2px] sm:w-[220px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className="flex flex-col gap-2 border-2 border-yellow-400 shadow-lg p-3 rounded-lg">
                <h1 className="text-[1.2rem] font-semibold sm:text-lg">
                  1. WEB DEVELOPMENT from Acmegrade
                </h1>
                <h4 className="text-[1.2rem] font-semibold sm:text-lg">
                  2. C/C++ Programming
                </h4>
                <h1 className="text-[1.2rem] font-semibold sm:text-lg">
                  3. 100x devs Full Stack Development
                </h1>
                <h1 className="text-[1.2rem] font-semibold sm:text-lg">
                  4. DevOps
                </h1>
                <h1 className="text-[1.2rem] font-semibold sm:text-lg">
                  5. SQL from Udemy
                </h1>
                <span className="text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  2024 - Present
                </span>
              </div>
            </div>
          </fieldset>
        </div>
        {/* Education Section */}
        <div className="right flex-1 flex items-center justify-center p-4 md:p-6">
          <fieldset
            data-aos="zoom-in"
            className="w-full max-w-[80%] p-5 py-12 sm:py-8 sm:p-2 bg-white border-2 border-gray-200 rounded-lg shadow-md"
          >
            <legend className="border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Education
            </legend>
            <div className="relative">
              {/* design */}
              <div className="design flex absolute left-[-120px] top-1/2 items-center rotate-[90deg] sm:left-[-130px]">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[200px] bg-gray-300 h-[2px] sm:w-[220px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className="flex flex-col gap-2 border-2 border-yellow-400 shadow-lg p-3 rounded-lg">
                <h1 className="text-[1.2rem] font-semibold sm:text-lg">
                  Bachelor Of Engineering - Information Technology
                </h1>
                <span className="text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  International Institute of Information Technology, Pune (IIIT Pune)
                </span>
                <span className="text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Year 2024 - Year 3
                </span>
                <p className="text-[.9rem] text-justify text-gray-500">
                  I am recently graduating. I developed a strong foundation in software development, data structures, algorithms, and database management. During my studies, I engaged in numerous projects that honed my skills in both frontend and backend technologies, as well as in DevOps. My academic journey has been marked by a continuous drive to learn and apply new technologies, which has prepared me to tackle real-world challenges and excel in the dynamic field of web development.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
