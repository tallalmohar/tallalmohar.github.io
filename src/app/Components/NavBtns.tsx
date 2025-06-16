'use client';
import React from "react";
import Image from "next/image";
import { inherits } from "util";
import Link from "next/link";

//defines props
type NavBtnProps = {
	imageSrc: string,
	title: string,
	imageAlt: string,
	rotateVal: string,
	marginVal: string,
	link: string
}
export default function NavBtns({imageSrc, title, imageAlt, rotateVal, marginVal, link}: NavBtnProps){
	return (
		<>
		<div 
		style={{position:"relative",  transform: `rotate(${rotateVal}deg)`, right:`${marginVal}px`
		 }}>
			<Link href={`${link}`} className={`flex mt-9 mb-9 flex-col border-3 rounded-2xl justify-center items-center w-[150px] h-[150px] p-1.5 bg-white relative 
							shadow-2xl hover:cursor-pointer hover:scale-110 duration-300 ease-linear`}>
			<Image src={imageSrc} height="75" width="75" alt={imageAlt} ></Image>
			<h1 className="text-xl">{title}</h1>
			</Link>
		</div>
		</>
	)
};