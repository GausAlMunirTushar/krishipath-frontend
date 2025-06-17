"use client";

import DivisionMap from "./DivisionMap";

const sampleProducts = [
	{ id: "1", name: "আলু", price: 30, division: "Dhaka" },
	{ id: "2", name: "Onion", price: 40, division: "Rajshahi" },
	{ id: "3", name: "Garlic", price: 55, division: "Khulna" },
];

export default function DivisionMapWrapper() {
	return (
		<div className="max-w-7xl mx-auto py-10 px-8">
			{/* Title */}
			<h1 className="text-3xl font-bold mb-2 text-green-500 text-center">
				বাংলাদেশের সরাসরি বাজার মূল্য
			</h1>

			{/* Description */}
			<p className="text-center text-green-800 mb-6 max-w-5xl mx-auto">
				এখানে বাংলাদেশের প্রতিটি বিভাগের বাজার থেকে সরাসরি মূল্য তথ্য
				দেখুন। প্রতিটি পণ্যের মূল্য বাজারের বর্তমান অবস্থা অনুযায়ী
				নিয়মিত আপডেট হয়, যাতে আপনি সঠিক সিদ্ধান্ত নিতে পারেন।
			</p>
			<DivisionMap productData={sampleProducts} />
		</div>
	);
}
