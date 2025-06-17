import React from "react";
import Image from "next/image";
import Link from "next/link";
import { NewsItem } from "@/types/news";

interface NewsCardProps {
	news?: NewsItem; // Optional with fallback
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
	if (!news) return null; // or show a fallback card

	const { _id, title, image, description, publishedAt } = news;

	return (
		<div className="bg-white rounded-2xl shadow hover:shadow-lg transition duration-300 overflow-hidden">
			<Image
				src={image || "/images/our-mission.webp"}
				alt={title || "সংবাদ"}
				width={400}
				height={250}
				className="w-full h-52 object-cover"
			/>
			<div className="p-4">
				<p className="text-sm text-gray-500 mb-2">
					{publishedAt || "প্রকাশের তারিখ অনুপস্থিত"}
				</p>
				<h3 className="text-lg font-semibold mb-2 line-clamp-2 truncate">
					{title || "শিরোনাম অনুপস্থিত"}
				</h3>
				<p className="text-sm text-gray-600 mb-4 line-clamp-3 truncate">
					{description || "সংক্ষিপ্ত বিবরণ নেই"}
				</p>
				<Link
					href={`/news/${_id ?? ""}`}
					className="text-green-600 font-medium hover:underline"
				>
					বিস্তারিত পড়ুন →
				</Link>
			</div>
		</div>
	);
};

export default NewsCard;
