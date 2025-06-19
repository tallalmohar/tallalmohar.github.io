"use client";

import React from "react";
import NavBtns from "./Components/NavBtns";
import SkillIcon from "./Components/SkillIcon";
import FeaturedProj from "./Components/FeaturedProf";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div id="main-Div" className="flex justify-center items-center  w-full">
        <div className="h-[594px]">
          <NavBtns link="/About" imageAlt="About Tab" imageSrc="/person.svg" title="About" rotateVal="10" marginVal="0"></NavBtns>
          <NavBtns link="/Contact" imageAlt="Contact Tab" imageSrc="/atsymbol.svg" title="Contact" rotateVal="0" marginVal="30"></NavBtns>
          <NavBtns link="/Books" imageAlt="Book Tab" imageSrc="/book.svg" title="Books" rotateVal="-10" marginVal="0"></NavBtns>
        </div>
        <div className="flex w-2xl h-full justify-center items-center flex-col text-center">
            <h1 className="text-2xl">Hello, my name is Tallal a </h1>
            <h1 className="text-6xl font-bold ">Full-Stack Developer &<br/> AI Engineer</h1>
            <div className="flex justify-center gap-3 mt-5 w-full">
              <SkillIcon disableHover={false} link="https://docs.spring.io/spring-boot/index.html" alt="springboot" src="/spring-boot-1.svg"></SkillIcon>
              <SkillIcon disableHover={false} link="https://react.dev/" alt="react" src="/react-min.png"></SkillIcon>
              <SkillIcon disableHover={false} link="https://www.typescriptlang.org/docs/" alt="typescript" src="typescript-min.png"></SkillIcon>
              <SkillIcon disableHover={false} link="https://docs.oracle.com/en/java/" alt="java" src="java-min.png"></SkillIcon>
              <SkillIcon disableHover={false} link="https://www.postgresql.org/docs/" alt="postgresql" src="postgresql.png"></SkillIcon>
              <SkillIcon disableHover={false} link="https://www.python.org/doc/" alt="python" src="python.png"></SkillIcon>
             
            </div> 
        </div>
        <div className="h-[594px]">
          <NavBtns link="/Projects" imageAlt="Projects Tab" imageSrc="/folder.svg" title="Projects" rotateVal="-10" marginVal="0"></NavBtns>
          <NavBtns link="https://github.com/tallalmohar" imageAlt="Github Link" imageSrc="/github.svg" title="Github" rotateVal="0" marginVal="-30"></NavBtns>
          <NavBtns link="https://www.linkedin.com/in/tallal-mohar-262607209/" imageAlt="Linkdin Link" imageSrc="/linkedin.svg" title="Linkdin" rotateVal="10" marginVal="0"></NavBtns>
        </div>

        
        
      </div>
      <div className="flex justify-center w-full mt-5">
          <div className="w-320 flex justify-between">
            <h1 className="text-3xl">Featured Projects</h1>
            <Link href="/Projects" className="text-gray-500 hover:underline hover:cursor-pointer text-xl">View all Projects ➪</Link>
          </div>
          
        </div>
        <div className="flex flex-wrap justify-center w-full mt-5 mb-5 gap-5 ">
          <FeaturedProj 
            ptag="Developed a full-stack NBA fantasy team builder and grader using Java, Spring Boot,
             and PostgreSQL, featuring a modular backend with Spring Data JPA and a dynamic 
             React/Tailwind CSS frontend." 
            skill4="java-min.png" 
            skill3="postgresql.png" 
            skill2="react-min.png" 
            skill1="/spring-boot-1.svg" 
            title="" 
            imgSrc="/nba.svg" 
            github="#"
            imageHeight={100}
            imageWidth2={100}
            scaleOnHover={false}
            disableHover={true}
          />
          <FeaturedProj
            ptag="For CMPT 340, I designed and trained an AI model in PyTorch to classify multi-channel EEG time-series data with up to ~74% accuracy, and implemented a 
            semi-supervised learning pipeline using pseudo-labeling to achieve ~72% accuracy with 70% less labeled data." 
            skill4="/python.png" 
            skill3="/pytorch.svg" 
            skill2="/jupiyter.png" 
            skill1="/matlab.png" 
            title="" 
            imgSrc="/sfu.png" 
            github="#"
            imageHeight={100}
            imageWidth2={100}
            scaleOnHover={false}
            disableHover={true}
          />
          <FeaturedProj
            ptag="A modern, responsive Tesla homepage built with Next.js and React, designed as a showcase project for the Frontend Engineer, Applications Engineering (Fall 2025) internship at Tesla." 
            skill4="/react-min.png" 
            skill3="/typescript-min.png" 
            skill2="/nextjs.svg" 
            skill1="/tailwind.png" 
            title="" 
            imgSrc="/tesla.png" 
            github="#"
            imageHeight={100}
            imageWidth2={150}
            scaleOnHover={false}
            disableHover={true}
          />
        </div>
    </>
  );
}
