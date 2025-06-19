'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";

type skillTypes = {
	src: string,
	alt: string,
	link: string,
	disableHover: boolean

}

export default function SkillIcon({src, alt, link, disableHover}:skillTypes){


	return (
		<>
		<div className={`h-15 w-15 relative flex items-center justify-center ${
        !disableHover ? 'hover:scale-110 hover:cursor-pointer' : ''
      }`}>
			<Link  className={`${disableHover ? 'cursor-default pointer-events-none' : 'cursor-pointer'}`} href={link}>
			<Image 
				src={src} 
				alt={alt}
				fill
				style={{ objectFit: 'contain' }} 
			/>
			</Link>
		</div>
		</>
	)
}