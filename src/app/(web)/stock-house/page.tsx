"use client";

import Image from "next/image";
import { useState } from "react";

const stockHouses = [
	{
		id: 1,
		name: "বালিয়াডাঙ্গী সদর গুদাম",
		location: "বালিয়াডাঙ্গী সদর বাজার, বালিয়াডাঙ্গী, ঠাকুরগাঁও",
		image: "/images/stockhouse/stockhouse-1.jpg",
		capacity: "৭,০০০ বস্তা",
		description:
			"সদর বাজার সংলগ্ন এই গুদামটি স্থানীয় কৃষকদের ধান, চাল ও মসলা জাতীয় পণ্য সংরক্ষণের জন্য ব্যবহৃত হয়। সহজলভ্য যোগাযোগ ব্যবস্থা এটিকে আরও কার্যকর করেছে।",
		district: "ঠাকুরগাঁও",
	},
	{
		id: 2,
		name: "বালিয়াডাঙ্গী স্টক হাউস 2",
		location: "লাহিড়ী হাট, বালিয়াডাঙ্গী, ঠাকুরগাঁও",
		image: "/images/stockhouse/stockhouse-2.jpg",
		capacity: "৫,৫০০ বস্তা",
		description:
			"উন্নত শীতাতপ নিয়ন্ত্রিত এই গুদামটি বিশেষ করে মৌসুমি ফসল ও সবজির সংরক্ষণে ব্যবহৃত হয়ে থাকে। এটি কৃষক এবং পাইকারদের জন্য নিরাপদ সংরক্ষণের নিশ্চয়তা দেয়।",
		district: "ঠাকুরগাঁও",
	},
	{
		id: 3,
		name: "লাহিড়ী হাট নম্বর গুদাম",
		location: "লাহিড়ী হাট , বালিয়াডাঙ্গী, ঠাকুরগাঁও",
		image: "/images/stockhouse/stockhouse-3.jpg",
		capacity: "৬,০০০ বস্তা",
		description:
			"এই গুদামটি একটি সম্প্রসারিত সুবিধা সম্পন্ন কেন্দ্র, যা অধিক পরিমাণ খাদ্যশস্য সঞ্চয়ে সক্ষম। এটি আশেপাশের অঞ্চলের কৃষিপণ্য সংগ্রহ ও বিতরণে গুরুত্বপূর্ণ ভূমিকা রাখে।",
		district: "ঠাকুরগাঁও",
	},
];

export default function StockHousePage() {
	const [search, setSearch] = useState("");
	const [selectedDistrict, setSelectedDistrict] = useState("");

	const districts = [...new Set(stockHouses.map((d) => d.district))];

	const filteredHouses = stockHouses.filter((house) => {
		return (
			house.name.toLowerCase().includes(search.toLowerCase()) &&
			(selectedDistrict === "" || house.district === selectedDistrict)
		);
	});

	return (
		<div className="min-h-screen bg-gray-50 px-4 py-10">
			<div className="max-w-7xl mx-auto">
				<h1 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-6">
					আমাদের স্টক হাউস সমূহ
				</h1>

				{/* Search and Filter */}
				<div className="flex flex-col md:flex-row gap-4 mb-8 justify-center items-center">
					<input
						type="text"
						placeholder="স্টক হাউস খুঁজুন..."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						className="w-full md:w-80 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
					/>
					<select
						value={selectedDistrict}
						onChange={(e) => setSelectedDistrict(e.target.value)}
						className="w-full md:w-60 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
					>
						<option value="">সব জেলা</option>
						{districts.map((d) => (
							<option key={d} value={d}>
								{d}
							</option>
						))}
					</select>
				</div>

				{/* Stock Cards */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{filteredHouses.length > 0 ? (
						filteredHouses.map((house) => (
							<div
								key={house.id}
								className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col"
							>
								<Image
									src={house.image}
									alt={house.name}
									width={500}
									height={300}
									className="w-full h-56 object-cover"
								/>
								<div className="p-5 flex-1 flex flex-col justify-between">
									<div>
										<h2 className="text-xl font-semibold text-green-800 mb-1">
											{house.name}
										</h2>
										<p className="text-sm text-gray-500 mb-1">
											📍 অবস্থান: {house.location}
										</p>
										<p className="text-sm text-gray-600 mb-2">
											🏬 ধারণক্ষমতা: {house.capacity}
										</p>
										<p className="text-sm text-gray-700">
											{house.description}
										</p>
									</div>
									<div className="mt-4 flex justify-between">
										<button className="text-sm text-green-600 hover:underline">
											বিস্তারিত দেখুন →
										</button>
										<button className="bg-green-600 text-white text-sm px-3 py-1 rounded hover:bg-green-700 transition">
											যোগাযোগ করুন
										</button>
									</div>
								</div>
							</div>
						))
					) : (
						<p className="text-center col-span-full text-gray-500">
							কোনো স্টক হাউস খুঁজে পাওয়া যায়নি।
						</p>
					)}
				</div>
			</div>
		</div>
	);
}
