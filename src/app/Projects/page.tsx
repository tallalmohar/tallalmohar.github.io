'use client';
import React from "react";
import FeaturedProj from "../Components/FeaturedProf";

export default function Projects(){
	return (
	<>
	<h1 className="text-5xl font-bold ml-60 ">Projects</h1>
	<h1 className="text-xl text-gray-400 ml-60 mb-10">Here are some of the projects that I have worked on recently!</h1>
	<div className="flex justify-center">
		<div className="grid grid-cols-2 grid-rows-3">
			<div className="p-4 text-center flex justify-center">
				<FeaturedProj
						ptag="CloudCue is a web application designed to help users in British Columbia plan activities based on real-time and forecasted weather. By integrating live weather data and geolocation CloudCue suggests suitable indoor or outdoor activities."
						skill4="/nextjs.svg" 
						skill3="/reactquery.png" 
						skill2="/tailwind.png" 
						skill1="/reactleaf.png" 
						title="" 
						imgSrc="/cloudcue.png" 
						github="https://github.com/CMPT-276-SUMMER-2025/final-project-21-spring"
						imageHeight={100}
						imageWidth2={150}
						scaleOnHover={true}
						disableHover={false}
					  />
			</div>
			<div className="p-4 text-center flex justify-center">
				<FeaturedProj
						ptag="A modern, responsive Tesla homepage built with Next.js and React, designed as a showcase project for the Frontend Engineer, Applications Engineering (Fall 2025) internship at Tesla." 
						skill4="/react-min.png" 
						skill3="/typescript-min.png" 
						skill2="/nextjs.svg" 
						skill1="/tailwind.png" 
						title="" 
						imgSrc="/tesla.png" 
						github="https://github.com/tallalmohar/tesla-project"
						imageHeight={100}
						imageWidth2={150}
						scaleOnHover={true}
						disableHover={false}
					  />
	
			</div>
			<div className="p-4 text-center flex justify-center">
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
							github="https://github.com/tallalmohar/NBA-Vision"
							imageHeight={100}
							imageWidth2={100}
							scaleOnHover={true}
							disableHover={false}
						  />
			</div>
			<div className="p-4 text-center flex justify-center">
				<FeaturedProj
							ptag="For CMPT 340, I designed and trained an AI model in PyTorch to classify multi-channel EEG time-series data with up to ~74% accuracy, and implemented a 
							semi-supervised learning pipeline using pseudo-labeling to achieve ~72% accuracy with 70% less labeled data." 
							skill4="/python.png" 
							skill3="/pytorch.svg" 
							skill2="/jupiyter.png" 
							skill1="/matlab.png" 
							title="" 
							imgSrc="/sfu.png" 
							github="https://github.com/tallalmohar/-EEG-Based-Classification-of-Psychiatric-Disorders-Using-Deep-Learning"
							imageHeight={100}
							imageWidth2={100}
							scaleOnHover={true}
							disableHover={false}
						  />
			</div>
			<div className="p-4 text-center flex justify-center">
				<FeaturedProj
						ptag="A Chrome extension that mixes coding with music.
								Developed during SFU Mountain Madness Hackathon, this browser extension plays music while users solve LeetCode problems, dynamically distorting audio when code submissions fail." 
						skill4="/javascript.png" 
						skill3="/css.png" 
						skill2="/spotifypng.png" 
						skill1="/chrome.png" 
						title="" 
						imgSrc="/sfusurge.jpeg" 
						github="https://github.com/tallalmohar/leetmadness"
						imageHeight={100}
						imageWidth2={150}
						scaleOnHover={true}
						disableHover={false}
					  />
			</div>
		</div>
		</div>
			
	</>
	)
}