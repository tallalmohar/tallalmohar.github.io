"use client";
import React from "react";
import Image from "next/image";

export default function Books() {
  return (
    <>
      <h1 className="text-5xl font-bold ml-60 ">Book List</h1>
			<h1 className="text-xl text-gray-400 ml-60 mb-10">Some books that I really enjoyed & recommend!</h1>
			<div className="grid grid-cols-2 items-start justify-start gap-10 w-full max-w-5xl mx-auto">

				<div className="border-3 rounded-2xl flex gap-5 bg-white p-3">
					<Image src={"/meditationsBOOK.jpg"} height={200} width={150} alt="Meditations"></Image>
					<div className="flex flex-col text-left w-72 max-w-72 ">
						<h1 className="text-2xl">Meditations<br/></h1>
						<h1 className="text-md">Marcus Aurelius</h1>
						<p className="mt-2">It offered me great insight into the mind of a one of history's greatest emperor's and how he struggled to understand himself and the the universe that surrounds him. </p>
						<div className="mt-5 flex gap-2">
							<Image src="/Star SVG.svg" height={30} width={30} alt="star"></Image>
							<Image src="/Star SVG.svg" height={30} width={30} alt="star"></Image>
							<Image src="/halfstar.png" height={30} width={30} alt="star"></Image>
						</div>
					</div>
				</div>

        <div className="border-3 rounded-2xl flex gap-5 bg-white p-3 ">
					<Image src={"/crime&punishment.png"} height={200} width={150} alt="Meditations"></Image>
					<div className="flex flex-col text-left w-72 max-w-72 ">
						<h1 className="text-2xl">Crime & Punishment<br/></h1>
						<h1 className="text-md">Fyodor Dostoevsky</h1>
						<p className="mt-2">Roskolnikov means "split" and I think that is a perfect way to describe this book. A split within the character who wants to find out whether he is an extraordinary or normal person.  </p>
						<div className="mt-5 flex gap-2">
							<Image src="/Star SVG.svg" height={30} width={30} alt="star"></Image>
							<Image src="/Star SVG.svg" height={30} width={30} alt="star"></Image>
							<Image src="/Star SVG.svg" height={30} width={30} alt="star"></Image>
              <Image src="/halfstar.png" height={30} width={30} alt="star"></Image>
						</div>
					</div>
				</div>


        <div className="border-3 rounded-2xl flex gap-5 bg-white p-3 ">
					<Image src={"/eastEden.jpg"} height={200} width={150} alt="Meditations"></Image>
					<div className="flex flex-col text-left w-72 max-w-72 ">
						<h1 className="text-2xl">East of Eden<br/></h1>
						<h1 className="text-md">John Steinbeck</h1>
						<p className="mt-2">This book dives into the messy complexities of human nature, following two families as they deal with guilt, jealousy, and the question of whether people are truly free to choose good or evil.</p>
						<div className="mt-5 flex gap-2">
							<Image src="/Star SVG.svg" height={30} width={30} alt="star"></Image>
							<Image src="/Star SVG.svg" height={30} width={30} alt="star"></Image>
							<Image src="/Star SVG.svg" height={30} width={30} alt="star"></Image>
              <Image src="/Star SVG.svg" height={30} width={30} alt="star"></Image>
						</div>
					</div>
				</div>


        <div className="border-3 rounded-2xl flex gap-5 bg-white p-3 ">
					<Image src={"/notesUnder.jpg"} height={200} width={150} alt="Meditations"></Image>
					<div className="flex flex-col text-left w-72 max-w-72 ">
						<h1 className="text-2xl">Notes from Underground<br/></h1>
						<h1 className="text-md">Fyodor Dostoevsky</h1>
						<p className="mt-2">  Currently Reading...</p>
						<div className="mt-5 flex gap-2">
							<Image src="/Star SVG.svg" height={30} width={30} alt="star"></Image>
							
						</div>
					</div>
				</div>



			</div>

      
    </>
  );
}
