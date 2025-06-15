"use client";

import React from "react";
import {
	Store,
	Warehouse,
	TrendingUp,
	Brain,
	CheckCircle,
	Info,
	Settings2,
	Sparkles,
} from "lucide-react";

const services = [
	{
		title: "কৃষি যন্ত্রপাতি বিক্রি",
		description: "উন্নত কৃষি যন্ত্রপাতি সহজে ও সাশ্রয়ী দামে সরবরাহ।",
		icon: <Settings2 className="text-green-600 w-8 h-8" />,
	},
	{
		title: "ফসল বিক্রয়ের কমিশন প্ল্যাটফর্ম",
		description: "ফল, শাকসবজি ও খাদ্যশস্য বিক্রির ডিজিটাল সমাধান।",
		icon: <Store className="text-green-600 w-8 h-8" />,
	},
	{
		title: "পরামর্শ ও প্রশিক্ষণ",
		description: "কৃষকদের জন্য আধুনিক প্রশিক্ষণ ও প্রযুক্তি পরামর্শ।",
		icon: <Info className="text-green-600 w-8 h-8" />,
	},
	{
		title: "ভাড়া ও প্রক্রিয়াজাতকরণ",
		description: "যন্ত্রপাতি ভাড়া ও ফসল প্রক্রিয়াজাতকরণের সুযোগ।",
		icon: <Warehouse className="text-green-600 w-8 h-8" />,
	},
];

const extendedServices = [
	{
		title: "Krishi Bazar (কৃষিপথ বাজার)",
		highlights: [
			"লাইভ বাজারদর",
			"কৃষক-বানিজ্যিক ক্রেতার সরাসরি যোগাযোগ",
			"দামের স্বচ্ছতা ও দরপত্র পদ্ধতি",
			"ঘরে বসেই ফসল বিক্রয়ের সুযোগ",
		],
		badge: "মূল চালিকাশক্তি",
		icon: <Store className="text-green-600 w-8 h-8" />,
	},
	{
		title: "স্টক হাউস সেবা",
		highlights: [
			"ন্যায্য মূল্যে ফসল ক্রয়",
			"অল্প পরিমাণ ফসলও সংগ্রহ",
			"ক্রয় করে পুনঃবিক্রয়",
			"ব্যবসায়িক লেনদেনে সহায়তা",
		],
		icon: <Warehouse className="text-green-600 w-8 h-8" />,
	},
	{
		title: "AI মূল্য পূর্বাভাস",
		highlights: [
			"বাজারদর বিশ্লেষণ",
			"ঋতু ও চাহিদার ধারা অনুযায়ী অনুমান",
			"ঝুঁকি কমানো ও পরিকল্পনা সহায়তা",
		],
		icon: <Brain className="text-green-600 w-8 h-8" />,
	},
	{
		title: "লাইভ বাজারদর আপডেট",
		highlights: [
			"প্রতিদিন হালনাগাদ তথ্য",
			"উপজেলা ও বিভাগভিত্তিক দাম",
			"মোবাইল ও ওয়েব অ্যাপের মাধ্যমে সহজে দেখা যায়",
		],
		icon: <TrendingUp className="text-green-600 w-8 h-8" />,
	},
	{
		title: "প্রশিক্ষণ ও সহায়তা",
		highlights: [
			"ডিজিটাল প্ল্যাটফর্ম ব্যবহার শেখানো",
			"প্রতিনিধিদের সরাসরি সাপোর্ট",
			"সিজনাল প্রশিক্ষণ ও পরামর্শ",
		],
		icon: <Sparkles className="text-green-600 w-8 h-8" />,
	},
];

const ServicesPage = () => {
	return (
		<section className="py-10 sm:py-20 px-6 md:px-16 bg-white text-gray-800">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold text-green-800 mb-4">
						আমাদের সেবাসমূহ
					</h2>
					<p className="text-lg text-gray-600">
						কৃষকদের জন্য আধুনিক, তথ্যভিত্তিক ও ন্যায্যতামূলক কৃষি
						সেবা।
						<br />
						প্রতিটি সেবা ডিজাইন করা হয়েছে কৃষকের বাস্তব চাহিদাকে
						কেন্দ্র করে।
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{services.map((service, index) => (
						<div
							key={index}
							className="bg-green-50 p-6 rounded-xl shadow-sm border border-green-300 hover:shadow-md transition"
						>
							<div className="mb-3">{service.icon}</div>
							<h3 className="text-xl font-semibold text-green-900">
								{service.title}
							</h3>
							<p className="mt-2 text-gray-700 text-sm">
								{service.description}
							</p>
							<div className="mt-3 text-green-700 flex items-center gap-2 text-sm">
								<CheckCircle className="w-4 h-4" /> বিস্তারিত
								জানুন
							</div>
						</div>
					))}
				</div>

				<div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{extendedServices.map((service, i) => (
						<div
							key={i}
							className="bg-white border border-green-300 rounded-2xl p-6 shadow-md hover:shadow-lg transition"
						>
							<div className="flex items-center gap-3 mb-4">
								{service.icon}
								<h4 className="text-xl font-bold text-green-800">
									{service.title}
								</h4>
							</div>
							{service.badge && (
								<span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded mb-3">
									{service.badge}
								</span>
							)}
							<ul className="list-disc list-inside  space-y-1 text-green-700">
								{service.highlights.map((point, idx) => (
									<li key={idx}>{point}</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ServicesPage;
