'use client';
import React, { useRef, FormEvent } from 'react';
import emailjs, { send } from '@emailjs/browser';

export default function ContactBox(){
	const form = useRef<HTMLFormElement>(null);

	const sendEmail = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		emailjs
		.sendForm('service_3j6sj0x', 'template_hs0gc0y', form.current as HTMLFormElement, {
			publicKey: 'OvarmoyIgl9dAMd9D',
		})
		.then(
			() => {
			console.log('SUCCESS!');
			},
			(error) => {
			console.log('FAILED...', error.text);
			},
		);
		form.current && form.current.reset();
	};
	return (
		<>
		<form ref={form} onSubmit={sendEmail} className="mb-50 mx-auto p-6 shadow-2xl bg-white border-3 w-3/4 rounded-lg">
			<div className="mb-4 flex flex-col">
				<label htmlFor="name" className="mb-2 text-2xl">Name</label>
				<input type="text" id="name" name="name" className="px-3 py-2 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
			</div>
			
			<div className="mb-4 flex flex-col">
				<label htmlFor="email" className="mb-2 text-2xl">Your Email</label>
				<input type="email" id="email" name="email" className="px-3 py-2 border-2 border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
			</div>
			
			<div className="mb-4 flex flex-col">
				<label htmlFor="message" className="mb-2 text-2xl">Message</label>
				<textarea id="message" name="message" className="px-3 py-2 border-2 border-black rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
				></textarea>
			</div>
			
			<button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:cursor-pointer">
				Submit
			</button>
		</form>
		</>
	)
} 