"use client";
import { useState } from "react";
import { Plus } from "lucide-react";
import PostModal from "@/pages/web/bazar/PostModal";
import PostCard from "@/pages/web/bazar/PostCard";

export default function Page() {
	const [tab, setTab] = useState("বিক্রয়");
	const [openModal, setOpenModal] = useState(false);

	const tabs = ["ক্রয়", "বিক্রয়", "আমার পোস্ট"];
	const posts = [
		{
			type: "বিক্রয়",
			user: "Reja",
			image: "/images/products/alu.png",
			price: "২০",
			unit: "কেজি",
			date: "2025-05-26",
			interested: 1,
			note: "আলু",
		},
		{
			type: "বিক্রয়",
			user: "Md Rakib",
			image: "/images/products/onion.png",
			price: "৫০",
			unit: "কেজি",
			date: "2025-05-05",
			interested: 0,
			note: "পেঁয়াজ",
		},
	];

	return (
		<main className="p-6 space-y-6 max-w-6xl mx-auto">
			{/* Title + Description */}
			<div className="space-y-2 text-center">
				<h1 className="text-3xl font-bold text-green-800">
					কৃষি বাজার
				</h1>
				<p className="text-gray-600">
					এখানেই খুঁজে পান স্থানীয় কৃষিপণ্য ও সরবরাহকারীদের পোস্ট।
					ক্রয় ও বিক্রয়ের তথ্য পান সহজেই।
				</p>
			</div>

			{/* Post Create Button */}
			<div className="flex justify-between items-center">
				<h2 className="text-xl font-semibold text-gray-700">
					সাম্প্রতিক পোস্ট
				</h2>
				<button
					onClick={() => setOpenModal(true)}
					className="flex items-center gap-2 bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700"
				>
					<Plus className="w-4 h-4" /> পোস্ট তৈরি করুন
				</button>
			</div>

			{/* Tabs */}
			<div className="flex gap-2 flex-wrap">
				{tabs.map((item) => (
					<button
						key={item}
						onClick={() => setTab(item)}
						className={`px-4 py-1 border rounded text-sm ${
							tab === item
								? "bg-green-600 text-white"
								: "text-green-600 hover:bg-blue-50"
						}`}
					>
						{item}
					</button>
				))}
			</div>

			{/* Cards */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
				{posts
					.filter((p) => p.type === tab)
					.map((post, idx) => (
						<PostCard key={idx} {...post} />
					))}
			</div>

			<div className="my-2">
				<PostModal
					isOpen={openModal}
					onClose={() => setOpenModal(false)}
				/>
			</div>
		</main>
	);
}
