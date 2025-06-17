import NewsCard from "@/pages/web/news/NewsCard";
import { NewsItem } from "@/types/news";

const dummyNews: NewsItem[] = [
	{
		_id: "1",
		title: "ধানের নতুন জাত উদ্ভাবন, কৃষিতে নতুন সম্ভাবনা",
		description:
			"গবেষকরা উদ্ভাবন করেছেন এক নতুন ধানের জাত যা কম পানিতে বেশি ফলন দেয়।",
		image: "/images/news1.jpg",
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

const NewsPage: React.FC = () => {
	return (
		<div className="max-w-7xl mx-auto px-8 py-10">
			<h1 className="text-3xl text-green-600 font-bold mb-8 text-center">
				সাম্প্রতিক কৃষি সংবাদ
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
				{dummyNews.map((news) => (
					<NewsCard key={news._id} news={news} />
				))}
			</div>
		</div>
	);
};

export default NewsPage;
