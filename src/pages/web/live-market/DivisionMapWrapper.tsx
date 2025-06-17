"use client";
import dynamic from "next/dynamic";

const DivisionMap = dynamic(() => import("./DivisionMap.client"), {
	ssr: false,
	loading: () => <p className="text-center">মানচিত্র লোড হচ্ছে...</p>,
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

			<DivisionMap productData={sampleProducts} />
		</section>
	);
}
