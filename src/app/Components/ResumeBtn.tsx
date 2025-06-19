'use client';
import Image from "next/image";
import React from "react";


export default function ResumeBtn(){

	return (
		<>
		<div onClick={() => window.open("/",'_blank')}className="relative right-50">
              <div className="border-2 rounded-lg shadow-2xl h-[50px] w-[50px] p-1 bg-white hover:cursor-pointer flex justify-center items-center hover:scale-110 transition-transform">
                <Image src="/menu.png" height={40} width={40} alt="resume"></Image>
              </div>
            </div>
		</>
	)
}