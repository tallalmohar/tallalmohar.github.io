'use client';
import React from "react";
import ContactBox from "../Components/ContactBox";

export default function Contact(){
	return (
	<>
	<div className="container mx-auto px-4 py-8 max-w-5xl">
		<div className="m-4">
			<h1 className="text-5xl font-bold">Contact</h1>
		</div>

		<ContactBox></ContactBox>

	</div>
	</>
	)
}