"use client";
import { Suspense } from "react";
import dynamic from "next/dynamic";

// Use dynamic import with no SSR
const DivisionMap = dynamic(() => import("./DivisionMap.client"), {
	ssr: false,
	loading: () => (
		<div className="w-full flex flex-col lg:flex-row gap-4">
			<div className="w-full lg:w-1/2 h-56 sm:h-[600px] flex items-center justify-center bg-gray-100 rounded-md animate-pulse">
				<p className="text-center">মানচিত্র লোড হচ্ছে...</p>
			</div>
			<div className="w-full lg:w-1/2 max-h-[600px] border-2 border-green-400 rounded-md p-4 shadow-inner bg-white">
				<div className="animate-pulse">
					<div className="h-6 bg-gray-200 rounded mb-4"></div>
					<div className="h-4 bg-gray-200 rounded mb-2"></div>
					<div className="h-4 bg-gray-200 rounded mb-2"></div>
				</div>
			</div>
		</div>
	),
});

const sampleProducts = [
	{ id: "1", name: "আলু", price: 30, division: "Dhaka" },
	{ id: "2", name: "পেঁয়াজ", price: 40, division: "Rajshahi" },
	{ id: "3", name: "রসুন", price: 55, division: "Khulna" },
];

export default function DivisionMapWrapper() {
	return (
		<section className="max-w-7xl mx-auto py-12 px-6">
			<h1 className="text-4xl font-bold text-green-600 text-center mb-4">
				বাংলাদেশের সরাসরি বাজার মূল্য
			</h1>
			<p className="text-center text-green-900 text-lg mb-8">
				বিভিন্ন বিভাগের বাজার থেকে সরাসরি পণ্যের মূল্য তথ্য দেখুন।
			</p>

			<Suspense
				fallback={
					<div className="w-full h-56 sm:h-[600px] flex items-center justify-center bg-gray-100 rounded-md">
						<p className="text-center">লোড হচ্ছে...</p>
					</div>
				}
			>
				<DivisionMap productData={sampleProducts} />
			</Suspense>
		</section>
	);
}
