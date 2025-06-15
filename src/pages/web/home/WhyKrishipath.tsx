"use client";

import { CheckCircle } from "lucide-react";

const features = [
	"KrishiPath শুধু তথ্য নয়, সেটা এমনভাবে দেয় যেন একজন গ্রামীণ কৃষকও সহজে বুঝতে পারেন।",
	"এক জায়গায় বাজারদর, আবহাওয়া, পরামর্শ, সহায়ক সংস্থা — সব কিছু একসাথে।",
	"সরকারি কৃষকের তথ্য সমন্বয়: স্থানীয় প্রতিনিধি, বাজার বিশ্লেষণ ও সঠিক খবর।",
	"তথ্য নয়, বাস্তব উপযোগী সিদ্ধান্ত তৈরির সুযোগ।",
	"AI সহ ফসলের দাম প্রেডিকশন, চার্ট-বট ইত্যাদি আধুনিক ফিচার (Upcoming)।",
	"নিজের ভাষায়, নিজের পরিসরে — বাংলাদেশের জন্য ডিজাইনকৃত।",
];

const WhyKrishipath = () => {
	return (
		<section className="py-20 bg-green-50 px-4">
			<div className="max-w-5xl mx-auto">
				<h2 className="text-3xl md:text-4xl font-bold text-green-900 text-center mb-8">
					কেন কৃষিপথ?
				</h2>
				<ul className="space-y-4 text-gray-800">
					{features.map((feature, idx) => (
						<li key={idx} className="flex items-start gap-3">
							<CheckCircle className="w-5 h-5 mt-1 text-green-600" />
							<span>{feature}</span>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default WhyKrishipath;
