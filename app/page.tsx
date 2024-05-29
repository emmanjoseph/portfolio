
import Footer from "@/Components/Footer";
import Grid from "@/Components/Grid";
import Hero from "@/Components/Hero";
import RecentProjects from "@/Components/RecentProjects";
import Skills from "@/Components/Skills";
import { FloatingNav } from "@/Components/ui/FloatingNav";
import { navItems } from "@/Data";
import Image from "next/image";
import React from "react";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main  className="relative bg-black-100 overflow-hidden flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full ">
        <FloatingNav 
        navItems={navItems}
        />
        <Hero/>
        <Grid/>
        <Skills/>
        <RecentProjects/>
        <Footer/>
      </div>

    </main>
  );
}
