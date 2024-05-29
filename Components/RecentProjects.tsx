"use client";

import { projects } from "@/Data";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { IoMdMore } from "react-icons/io";
import { CiPaperplane } from "react-icons/ci";
// import { PinContainer } from "./ui/3d-pin";



const RecentProjects = () => {
  const handleClick =()=>{

  }
    return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="grid md:grid-cols-3 mt-8 p-0 md:p-7 gap-7">
        {projects.map((item) => (
          <div
            className="flex flex-col gap-2 w-full md:w-[400px] border border-white/15 p-3 rounded-lg"
            key={item.id}
          >
           <div className="">
              <img src={item.img} alt="" />
           </div>
           <div>
            {item.des}
           </div>
           <div className="flex flex-col md:flex-row md:gap-4 gap-2">
             <MagicButton
           title="View more"
           handleClick={handleClick}
           position="left"
           icon={<IoMdMore/>}


           />
             <MagicButton
           title="Live Demo"
           icon={<CiPaperplane/>}
           position="right"
           

           />
           </div>
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;