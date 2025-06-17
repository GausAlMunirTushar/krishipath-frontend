"use client";

import { useParams } from "next/navigation";
import { NewsItem } from "@/types/news";
import { useEffect, useState } from "react";

const dummyNews: NewsItem[] = [
	{
		_id: "1",
		title: "ধানের নতুন জাত উদ্ভাবন, কৃষিতে নতুন সম্ভাবনা",
		description:
			"গবেষকরা উদ্ভাবন করেছেন এক নতুন ধানের জাত যা কম পানিতে বেশি ফলন দেয়।",
		image: "/images/our-mission.webp",
		publishedAt: "২০২৫-০৬-১৭",
	},
	{
		_id: "2",
		title: "কৃষকদের জন্য ভর্তুকি সহ কৃষি ঋণের ঘোষণা",
		description: "সরকার ঘোষণা করেছে ভর্তুকিযুক্ত কৃষি ঋণের নতুন প্যাকেজ।",
		image: "/images/news2.jpg",
		publishedAt: "২০২৫-০৬-১৬",
	},
];

const NewsDetailPage: React.FC = () => {
	const params = useParams();
	const { id } = params || {};

	const [news, setNews] = useState<NewsItem | null>(null);

	useEffect(() => {
		if (!id) return;

		const found = dummyNews.find((item) => item._id === id);
		setNews(found || null);
	}, [id]);

	if (!id) {
		return (
			<div className="max-w-6xl mx-auto p-8">
				<p className="text-center text-gray-500">
					নিউজ আইডি প্রদান করা হয়নি।
				</p>
			</div>
		);
	}

	if (!news) {
		return (
			<div className="max-w-6xl mx-auto p-8">
				<p className="text-center text-gray-500">
					Loading or News not found...
				</p>
			</div>
		);
	}

	return (
		<div className="max-w-6xl mx-auto p-8">
			<h1 className="text-3xl font-bold mb-4 text-green-700">
				{news.title}
			</h1>
			<p className="text-gray-500 mb-6">প্রকাশিত: {news.publishedAt}</p>
			<img
				src={news.image}
				alt={news.title}
				className="w-full max-h-80 object-cover rounded mb-6"
			/>
			<p className="text-lg leading-relaxed">{news.description}</p>
		</div>
	);
};

export default NewsDetailPage;
