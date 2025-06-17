'use client';
import React from "react";
import SkillIcon from "../Components/SkillIcon";

export default function About(){
    return (
    <>
        <div className="container mx-auto px-4 py-8 max-w-5xl">
            <div className="mb-8">
                <h1 className="text-5xl font-bold">Tallal Mohar</h1>
                <h1 className="text-md font-bold text-gray-500">22, Full-Stack Developer & ML Engineer</h1>
            </div>
            
            <div className="bg-white border shadow-2xl rounded-2xl p-6 mb-10 w-1/2">
                <p>
                    I'm Tallal Mohar, a Computing Science student at Simon Fraser University with a concentration
                    in Artificial Intelligence. I'm passionate about building impactful software—from full-stack
                    web applications to intelligent systems that process complex data.<br/><br/>Currently, I'm working as
                    a Software Developer  @
                </p>
            </div>
            
            <hr className="w-full h-1 mx-auto border-0 rounded-sm my-8 bg-black"></hr>
            
            <div className="border shadow-2xl rounded-2xl p-6 mb-8 bg-white">
                <div className="flex justify-between">
                    <h1 className="text-3xl font-bold">Simon Fraser University</h1>
                    <h1 className="text-sm font-bold self-center">Expected Dec 2026</h1>
                </div>
                <div className="mt-2">
                    <h1 className="text-sm italic">BSc. Computing Science, Concentration in Artificial Intelligence</h1>
                    <h1 className="text-md mt-2">Selected Coursework: Data Structures and Programming, Database Systems, Web Development, Biomedical Computing, Artificial Intelligence</h1>
                </div>
            </div>
            
            <div className="border shadow-2xl rounded-2xl p-6 bg-white mb-8">
                <h1 className="text-3xl font-bold">Skills</h1>
                <h1 className="mt-4 mb-2">Languages</h1>
                <div className="flex gap-3 flex-wrap">
                    <SkillIcon link="https://docs.spring.io/spring-boot/index.html" alt="java" src="/java-min.png"></SkillIcon>
                    <SkillIcon link="https://docs.spring.io/spring-boot/index.html" alt="typescirpt" src="/typescript-min.png"></SkillIcon>
                    <SkillIcon link="https://docs.spring.io/spring-boot/index.html" alt="javascript" src="/javascript.png"></SkillIcon>
                    <SkillIcon link="https://docs.spring.io/spring-boot/index.html" alt="css" src="/css.png"></SkillIcon>
                    <SkillIcon link="https://docs.spring.io/spring-boot/index.html" alt="python" src="/python.png"></SkillIcon>
                    <SkillIcon link="https://docs.spring.io/spring-boot/index.html" alt="postgresql" src="/postgresql.png"></SkillIcon>
                    <SkillIcon link="https://docs.spring.io/spring-boot/index.html" alt="mongodb" src="/mongo.png"></SkillIcon>
                    <SkillIcon link="https://docs.spring.io/spring-boot/index.html" alt="C" src="/c.png"></SkillIcon>
                    <SkillIcon link="https://docs.spring.io/spring-boot/index.html" alt="C++" src="/c++.png"></SkillIcon>
                </div>
                <h1 className="mt-4 mb-2">Technologies & Frameworks</h1>
                <div className="flex gap-3 flex-wrap">
                    <SkillIcon link="https://docs.spring.io/spring-boot/index.html" alt="react" src="/react-min.png"></SkillIcon>
                    <SkillIcon link="https://docs.spring.io/spring-boot/index.html" alt="springboot" src="/spring-boot-1.svg"></SkillIcon>
                    <SkillIcon link="https://docs.spring.io/spring-boot/index.html" alt="nextjs" src="/nextjs.svg"></SkillIcon>
                    <SkillIcon link="https://docs.spring.io/spring-boot/index.html" alt="nodejs" src="/nodejs.png"></SkillIcon>
                    <SkillIcon link="https://docs.spring.io/spring-boot/index.html" alt="tailwind" src="/tailwind.png"></SkillIcon>
                </div>
            </div>
        </div>
    </>
    )
}