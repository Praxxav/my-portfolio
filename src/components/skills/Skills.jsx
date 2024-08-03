import React from "react";
import ProgressBar from "../../chip/ProgressBar";
import SkillBox from "../../chip/SkillBox";

import {
  IoLogoHtml5,
  IoLogoNodejs,
  IoLogoAngular,
  IoLogoPython,
  IoLogoJavascript,
  
} from "react-icons/io";

import {
  SiGnubash,
  SiKubernetes,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import { FaAws, FaDocker, FaGithub, FaJava } from "react-icons/fa";
import { GrCode } from "react-icons/gr";
import { FaGit } from "react-icons/fa6";

const Skills = ({ darkMode }) => {
  return (
    <div id="skills" className="bg-white dark:bg-gray-800">
      <div className="container mx-auto py-16 px-6 md:px-0">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-10">
          <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.5px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        {/* content */}
        <div className="flex flex-col md:flex-row gap-10 ml-6">
          {/* Left Box */}
          <div className="left flex-1">
            <p className="text-gray-700 font-medium">
              Here are my skills.
            </p>
            <div className="left flex-1 flex flex-wrap gap-10 items-center justify-evenly ">
            <div className="first1 flex flex-col gap-10">
              <SkillBox
                logo={<IoLogoNodejs />}
                
                white={"black"}
                skill={"NodeJs"}
              />
              <SkillBox
                logo={<SiPostgresql />}
                
                white={"black"}
                skill={"SQL"}
              />
            </div>
            <div className="first2 flex flex-col gap-10">
              <SkillBox
                logo={<IoLogoPython />}
                
                white={"black"}
                skill={"Python"}
              />
              <SkillBox
                logo={<SiMongodb />}
                
                white={"black"}
                skill={"NoSQL"}
              />
            </div>
            
            </div>
          </div>
          {/* center box */}
          <div className="center flex-1 flex flex-wrap gap-10 items-center justify-evenly ">
            <div className="first1 flex flex-col gap-10">
              <SkillBox
                logo={<SiKubernetes />}
                
                white={"black"}
                skill={"Kubernetes"}
              />
              <SkillBox
                logo={<FaDocker />}
                
                white={"black"}
                skill={"Docker"}
              />
            </div>
            <div className="first2 flex flex-col gap-10">
              <SkillBox
                logo={<FaAws />}
                
                white={"black"}
                skill={"Aws"}
              />
              <SkillBox
                logo={<FaGithub />}
                
                white={"black"}
                skill={"Github"}
              />
            </div>
            
            </div>
          {/* Right Box */}
          <div className="right flex-1 flex flex-wrap gap-10 items-center justify-evenly ">
            <div className="first2 flex flex-col gap-10">
              <SkillBox
                logo={<FaGit />}
                
                white={"black"}
                skill={"Git"}
              />
              <SkillBox
                logo={<SiGnubash />}
                
                white={"black"}
                skill={"Bash"}
              />
              
            </div>
            <div className="last2 flex flex-col gap-10">
              <SkillBox
                logo={<SiReact />}
                white={"black"}
                skill={"React"}
              />
              <SkillBox
                logo={<SiTypescript />}
                
                white={"black"}
                skill={"TypeScript"}
              />
            </div>
          </div>
        </div>
        {/* Direct render check */}
     
      </div>
    </div>
  );
};

export default Skills;
