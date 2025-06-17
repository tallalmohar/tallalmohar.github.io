'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";

type skillTypes = {
	src: string,
	alt: string,
	link: string,

}

export default function SkillIcon({src, alt, link}:skillTypes){


	return (
		<>
		<div className="h-15 w-15 relative flex items-center justify-center hover:scale-120 duration-300">
			<Link href={link}>
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