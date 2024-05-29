import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const Hero = () => {
  return (
    
    <div className="pb-20 pt-36" id="#home">
      <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
      <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple"/>
      <Spotlight className="top-28 left-80 h-[80vh]" fill="indigo"/>
      
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.02] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      
      <div className="flex justify-center relative my-28 mb-20 z-20">
        <div className="max-w-[89vh] md:max-w-2xl lg:max-w-[80vh] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-90">Dynamic Web Magic with next.js</h2>

          <TextGenerateEffect
            className="text-center w-full lg:w-[75vw] lg:text-[20px] md:text-2xl lg:text-5xl"
            words="Transforming Concepts Into Seamless User Experiences"
          />
          <p className="text-center md:tracking-wider mb-4 md:text-lg">
            Hi there,I&apos;m Emmanuel, a frontend Engineer based in Nairobi, Kenya
          </p>
          <a href="#projects">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
