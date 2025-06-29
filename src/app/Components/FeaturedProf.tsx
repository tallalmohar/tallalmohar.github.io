'use client';

import Image from "next/image";
import SkillIcon from "./SkillIcon";
import Link from "next/link";
type FeaturedProjProps = {
    imgSrc: string,
    github: string,
    title: string,
    skill1: string,
    skill2: string,
    skill3: string,
    skill4: string,
    ptag: string,
    imageHeight: number, 
    imageWidth2: number, 
    scaleOnHover: boolean,
    disableHover: boolean
}

export default function FeaturedProj({
    imgSrc, 
    github, 
    title,
    skill1,
    skill2,
    skill3,
    skill4,
    ptag,
    imageHeight,
    imageWidth2,
    scaleOnHover,
    disableHover
}: FeaturedProjProps){
    const handleClick = () => {
        window.location.href = github
    }
    return(
        <>
            <div onClick={handleClick} className={`w-130 border-3 bg-white ${scaleOnHover ? 'hover:scale-110 hover:cursor-pointer' : ''}   duration-300 ease-linear rounded-2xl shadow-2xl flex p-4`}>
                <div className="flex flex-col justify-center p-4">
                <Image 
                    className="h-auto" 
                    style={{ maxWidth: imageWidth2 }} 
                    src={imgSrc} 
                    height={imageHeight} 
                    width={imageWidth2} 
                    alt="Project Image"
                />
                <h1 className="relative left-2 text-2xl w-fit">{title}</h1>
                </div>
                <div className="flex flex-col items-center ">
                <p className="text-left mt-5">{ptag}</p>
                    <div className="flex gap-3 mt-4">
                    <SkillIcon disableHover={disableHover} link="" src={skill1} alt="Springboot"></SkillIcon>
                    <SkillIcon disableHover={disableHover} link="" src={skill2} alt="React"></SkillIcon>
                    <SkillIcon disableHover={disableHover} link="" src={skill3} alt="postgresql"></SkillIcon>
                    <SkillIcon  disableHover={disableHover} link="" src={skill4} alt="typescript"></SkillIcon>
                    </div>
                </div>
                
            </div>
            
        </>
    )
};