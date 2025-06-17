"use client";

import React from "react";
import Link from "next/link";

const Hero = () => {
	return (
		<section className="relative bg-green-50 overflow-hidden py-20 px-4 md:px-10 rounded-md">
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
				{/* Text Content */}
				<div className="text-center md:text-left">
					<h1 className="text-4xl md:text-5xl font-bold text-green-800 leading-tight">
						কৃষকের স্বপ্ন বাস্তবের পথে
					</h1>
					<p className="mt-4 text-lg text-gray-700 max-w-xl">
						কৃষিপথ একটি আধুনিক প্ল্যাটফর্ম যা কৃষকদের যন্ত্রপাতি
						বিক্রি, ফসলের বাজারমূল্য জানা, কৃষি প্রশিক্ষণ এবং আয়
						বাড়ানোর সুযোগ প্রদান করে।
					</p>
					<div className="mt-6 flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start">
						<Link href="/services">
							<button className="text-white cursor-pointer px-4 py-2 rounded-md bg-green-600 hover:bg-green-700">
								আমাদের সেবা দেখুন
							</button>
						</Link>
						<Link href="/about">
							<button className="text-green-700 cursor-pointer px-4 py-2 rounded-md border-green-600">
								আমাদের সম্পর্কে জানুন
							</button>
						</Link>
					</div>
				</div>

				{/* Hero Image */}
				<div className="relative">
					<img
						src="/images/farmer/hero-farmer.jpg"
						alt="Hero Farmer"
						className="w-full max-w-md md:max-w-lg mx-auto h-80 object-cover rounded-2xl"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
