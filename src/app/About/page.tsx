'use client';
import React from "react";
import SkillIcon from "../Components/SkillIcon";
import Image from "next/image";

export default function About(){
    return (
    <>
        <div className="container mx-auto px-4 py-8 max-w-5xl">
            <div className="mb-8">
                <h1 className="text-5xl font-bold">Tallal Mohar</h1>
                <h1 className="text-md font-bold text-gray-500">22, Full-Stack Developer & ML Engineer</h1>
                
            </div>
            <div className="flex">
            <div className="flex flex-col">
                <div className="bg-white border-3 shadow-2xl rounded-2xl p-6 h-70 mb-10 w-4/5">
                
                    <p>
                        I'm Tallal Mohar, a Computing Science student at Simon Fraser University with a concentration
                        in Artificial Intelligence. I'm passionate about building impactful software—from full-stack
                        web applications to intelligent systems that process complex data.<br/>
                        

                        <br/>Currently, I'm working as
                        a Software Developer  @ .....
                    </p>
                    
                </div>
                 <Image  className=" rounded-2xl" src="random.jpeg" height="20" width="450" alt="Beautiful British Columbia sunset"></Image>
             </div>
             <Image  className="ml-3 rounded-2xl" src="me.jpg" height="100" width="450" alt="tallal"></Image>
            </div>
           
            <hr className="w-full h-1 mx-auto border-0 rounded-sm my-8 bg-black"></hr>
            
            <div className="border-3 shadow-2xl rounded-2xl p-6 mb-8 bg-white">
                <div className="flex justify-between">
                    <h1 className="text-3xl font-bold">Simon Fraser University</h1>
                    <h1 className="text-sm font-bold self-center">Expected Dec 2026</h1>
                </div>
                <div className="mt-2">
                    <h1 className="text-sm italic">BSc. Computing Science, Concentration in Artificial Intelligence</h1>
                    <h1 className="text-md mt-2">Selected Coursework: Data Structures and Programming, Database Systems, Web Development, Biomedical Computing, Artificial Intelligence</h1>
                </div>
            </div>
            
            <div className="border-3 shadow-2xl rounded-2xl p-6 bg-white mb-8">
                <h1 className="text-3xl font-bold">Skills</h1>
                <h1 className="mt-4 mb-2">Languages</h1>
                <div className="flex gap-3 flex-wrap">
                    <SkillIcon disableHover={false} link="https://docs.oracle.com/en/java/" alt="java" src="/java-min.png"></SkillIcon>
                    <SkillIcon disableHover={false} link="https://www.typescriptlang.org/docs/" alt="typescirpt" src="/typescript-min.png"></SkillIcon>
                    <SkillIcon disableHover={false} link="https://developer.mozilla.org/en-US/docs/Web/JavaScript" alt="javascript" src="/javascript.png"></SkillIcon>
                    <SkillIcon disableHover={false} link="https://developer.mozilla.org/en-US/docs/Web/CSS" alt="css" src="/css.png"></SkillIcon>
                    <SkillIcon disableHover={false} link="https://docs.python.org/3/" alt="python" src="/python.png"></SkillIcon>
                    <SkillIcon disableHover={false} link="https://www.postgresql.org/docs/" alt="postgresql" src="/postgresql.png"></SkillIcon>
                    <SkillIcon disableHover={false} link="https://www.mongodb.com/docs/" alt="mongodb" src="/mongo.png"></SkillIcon>
                    <SkillIcon disableHover={false} link="https://devdocs.io/c/" alt="C" src="/C.png"></SkillIcon>
                    <SkillIcon disableHover={false} link="https://devdocs.io/cpp/" alt="C++" src="/C++.png"></SkillIcon>
                </div>
                <h1 className="mt-4 mb-2">Technologies & Frameworks</h1>
                <div className="flex gap-3 flex-wrap">
                    <SkillIcon disableHover={false} link="https://react.dev/" alt="react" src="/react-min.png"></SkillIcon>
                    <SkillIcon disableHover={false} link="https://docs.spring.io/spring-boot/index.html" alt="springboot" src="/spring-boot-1.svg"></SkillIcon>
                    <SkillIcon disableHover={false} link="nextjs.org" alt="nextjs" src="/nextjs.svg"></SkillIcon>
                    <SkillIcon disableHover={false} link="https://nodejs.org/en" alt="nodejs" src="/nodejs.png"></SkillIcon>
                    <SkillIcon disableHover={false}link="https://tailwindcss.com/" alt="tailwind" src="/tailwind.png"></SkillIcon>
                    <SkillIcon disableHover={false}link="https://react-leaflet.js.org/" alt="reactleaf" src="/reactleaf.png"></SkillIcon>
                    <SkillIcon disableHover={false}link="https://tanstack.com/query/latest/docs/framework/react/overview" alt="reactquery" src="/reactquery.png"></SkillIcon>
                    <SkillIcon disableHover={false}link="https://www.mathworks.com/help/matlab/index.html" alt="matlab" src="/matlab.png"></SkillIcon>
                    <SkillIcon disableHover={false}link="https://jupyter.org/" alt="matlab" src="/jupiyter.png"></SkillIcon>
                </div>
            </div>
        </div>
    </>
    )
}