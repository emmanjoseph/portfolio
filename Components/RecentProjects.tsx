"use client";

import { useState } from "react";
import { projects } from "@/Data";
import { FaLocationArrow } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { IoMdMore } from "react-icons/io";
import { CiPaperplane } from "react-icons/ci";
// import { PinContainer } from "./ui/3d-pin";

interface Project {
  id: number;
  img: string;
  des: string;
  technologies: string[];
  link:string;
  title:string;
  
}

const RecentProjects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleViewMoreClick = (project: Project) => {
    setSelectedProject(project);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="grid md:grid-cols-3 mt-8 p-0 md:p-7 gap-7">
        {projects.map((item: Project) => (
          <div
            className="flex flex-col gap-2 w-full md:w-[400px] border border-white/15 p-3 rounded-lg"
            key={item.id}
          >
            <div className="">
              <img
                src={item.img}
                alt=""
                className="w-full h-[200px] rounded-lg object-fit"
              />
            </div>
            <h1 className="text-[16px] font-bold ">{item.title}</h1>
            <div className="flex flex-row md:gap-4 gap-2 items-center justify-between mt-5">
               
              <a href={item.link}
              className="text-white font-bold text-[14px] pb-3 underline flex items-center gap-2"
              >
                
                <p className="font-bold text-[15px]">Live Preview</p>
                <CiPaperplane size={25}/>
              </a>

              <div>
              <IoMdMore size={25} onClick={() => handleViewMoreClick(item)} />

              </div>
            </div>
            <div className="text-[14px] md:text-[15px] font-normal text-justify">
              {item.des}
              
              </div>
            
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center duration-500">
          <div className="bg-white p-5 rounded-lg shadow-lg w-11/12 md:w-4/12 text-black duration-400">
            <h2 className="text-xl font-medium mb-1 text-[16px] text-indigo-700">Project Details</h2>
            <p className="text-gray-700 w-full text-justify text-[14px]">{selectedProject.des}</p>
            <h3 className="text-lg font-medium mt-1 text-[16px] text-indigo-700">Technologies Used:</h3>
            <div className="grid grid-cols-2 gap-1 ">
              {selectedProject.technologies.map((tech, index) => (
                <span key={index}
                className="text-gray-700 text-[14px]"
                >{tech}</span>
              ))}
            </div>
            <button
              className="absolute top-2 md:top-[25%] right-2 md:right-[30%] bg-purple-500 text-white bg-indigo-700  p-4 rounded-full text-[13px]"
              onClick={closePopup}
            >
              <IoClose size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentProjects;
