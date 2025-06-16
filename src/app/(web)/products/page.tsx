"use client";

import ProductCard, { Product } from "@/pages/web/products/ProductCard";
import React from "react";

const products: Product[] = [
	{
		id: 1,
		title: "আলু (Potato)",
		description: "নির্বাচিত গুণমান সম্পন্ন দেশি আলু।",
		image: "/images/products/alu.png",
		unit: "কেজি",
		basePrice: 18,
		category: "শাকসবজি",
	},
	{
		id: 2,
		title: "টমেটো (Tomato)",
		description: "তাজা ও পুষ্টিকর দেশি টমেটো।",
		image: "/images/products/tomato.png",
		unit: "কেজি",
		basePrice: 25,
		category: "শাকসবজি",
	},
	{
		id: 3,
		title: "পেঁয়াজ (Onion)",
		description: "রান্নার জন্য প্রয়োজনীয় তাজা পেঁয়াজ।",
		image: "/images/products/onion.png",
		unit: "কেজি",
		basePrice: 35,
		category: "শাকসবজি",
	},
	{
		id: 4,
		title: "বেগুন (Brinjal)",
		description: "সরাসরি কৃষকের কাছ থেকে সংগ্রহ করা তাজা বেগুন।",
		image: "/images/products/gom.png",
		unit: "কেজি",
		basePrice: 28,
		category: "শাকসবজি",
	},
	{
		id: 5,
		title: "শসা (Cucumber)",
		description: "শীতল ও পুষ্টিকর তাজা শসা।",
		image: "/images/products/rosun.png",
		unit: "কেজি",
		basePrice: 22,
		category: "শাকসবজি",
	},
	{
		id: 6,
		title: "ধনিয়া পাতা (Coriander Leaves)",
		description: "তাজা ও সুবাসিত ধনিয়া পাতা।",
		image: "/images/products/sak.png",
		unit: "গাদা",
		basePrice: 5,
		category: "শাকসবজি",
	},
	{
		id: 7,
		title: "ধানের বীজ",
		description: "উন্নত মানের উচ্চ ফলনশীল ধানের বীজ।",
		image: "/images/products/gom.png",
		unit: "কেজি",
		basePrice: 55,
		category: "বীজ",
	},
];

const ProductsPage = () => {
	return (
		<section className="py-10 px-6 md:px-16 bg-white text-gray-800">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold text-green-800 mb-4">
						আমাদের কৃষি বাজার
					</h2>
					<p className="text-lg text-gray-600">
						কৃষকদের প্রয়োজনীয় আধুনিক ও কার্যকরী কৃষিপণ্য এক জায়গায়।
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
					{products.map((product, index) => (
						<ProductCard key={index} product={product} />
					))}
				</div>
			</div>
		</section>
	);
};

export default ProductsPage;
