"use client";

import React from "react";
import { CheckCircle } from "lucide-react";

const services = [
	{
		title: "কৃষি যন্ত্রপাতি বিক্রি",
		description: "উন্নত কৃষি যন্ত্রপাতি সহজে ও সাশ্রয়ী দামে সরবরাহ।",
		icon: "/images/icons/tools.svg",
	},
	{
		title: "ফসল বিক্রয়ের কমিশন প্ল্যাটফর্ম",
		description: "ফল, শাকসবজি ও খাদ্যশস্য বিক্রির ডিজিটাল সমাধান।",
		icon: "/images/icons/market.svg",
	},
	{
		title: "পরামর্শ ও প্রশিক্ষণ",
		description: "কৃষকদের জন্য আধুনিক প্রশিক্ষণ ও প্রযুক্তি পরামর্শ।",
		icon: "/images/icons/advice.svg",
	},
	{
		title: "ভাড়া ও প্রক্রিয়াজাতকরণ",
		description: "যন্ত্রপাতি ভাড়া ও ফসল প্রক্রিয়াজাতকরণের সুযোগ।",
		icon: "/images/icons/rent.svg",
	},
];

const ServicesPage = () => {
	return (
		<section className="py-20 px-6 md:px-16 bg-white text-gray-800">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold text-green-800 mb-4">
						আমাদের সেবাসমূহ
					</h2>
					<p className="text-lg text-gray-600">
						কৃষকদের জন্য আধুনিক, সাশ্রয়ী ও নির্ভরযোগ্য কৃষি সেবা
						প্রদান।
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
					{services.map((service, index) => (
						<div
							key={index}
							className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
						>
							<img
								src={service.icon}
								alt={service.title}
								className="w-12 h-12 mb-4"
							/>
							<h3 className="text-xl font-semibold text-green-800">
								{service.title}
							</h3>
							<p className="mt-2 text-gray-700 text-sm">
								{service.description}
							</p>
							<div className="mt-4 text-green-600 flex items-center gap-1">
								<CheckCircle className="w-4 h-4" /> বিস্তারিত
								জানুন
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ServicesPage;
