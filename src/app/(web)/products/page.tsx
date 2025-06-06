"use client";

import React from "react";
import { CheckCircle } from "lucide-react";

const products = [
	{
		title: "উন্নত মানের বীজ",
		description: "ফসল উৎপাদনের জন্য উচ্চ ফলনশীল এবং রোগ প্রতিরোধী বীজ।",
		icon: "/images/icons/seeds.svg",
	},
	{
		title: "জৈব সার ও রসায়নিক",
		description: "ভূমির উর্বরতা বৃদ্ধির জন্য প্রাকৃতিক ও নিরাপদ উপাদান।",
		icon: "/images/icons/fertilizer.svg",
	},
	{
		title: "কৃষি যন্ত্রপাতি",
		description: "চাষ, রোপণ, সেচ ও কাটাইয়ের আধুনিক যন্ত্রপাতি।",
		icon: "/images/icons/machine.svg",
	},
	{
		title: "কৃষি প্রযুক্তি সরঞ্জাম",
		description: "আবহাওয়া, সেচ ও মাটির পরিমাপ যন্ত্রপাতি।",
		icon: "/images/icons/tech.svg",
	},
];

const ProductsPage = () => {
	return (
		<section className="py-20 px-6 md:px-16 bg-white text-gray-800">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold text-green-800 mb-4">
						আমাদের পণ্যসমূহ
					</h2>
					<p className="text-lg text-gray-600">
						কৃষকদের প্রয়োজনীয় আধুনিক ও কার্যকরী কৃষিপণ্য এক জায়গায়।
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
					{products.map((product, index) => (
						<div
							key={index}
							className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
						>
							<img
								src={product.icon}
								alt={product.title}
								className="w-12 h-12 mb-4"
							/>
							<h3 className="text-xl font-semibold text-green-800">
								{product.title}
							</h3>
							<p className="mt-2 text-gray-700 text-sm">
								{product.description}
							</p>
							<div className="mt-4 text-green-600 flex items-center gap-1">
								<CheckCircle className="w-4 h-4" /> বিস্তারিত
								দেখুন
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProductsPage;
