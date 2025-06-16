"use client";

import { useEffect, useState } from "react";
import productData from "@/data/productData";
import successStories from "@/data/successStories";
import FAQ from "@/pages/web/faq/FAQ";
import Hero from "@/pages/web/home/Hero";
import OurServices from "@/pages/web/home/OurServices";
import Weather from "@/pages/web/home/Weather";
import WhyKrishipath from "@/pages/web/home/WhyKrishipath";
import FarmerSuccessStory from "@/pages/web/success-story/FarmerSuccessStory";
import apiClient from "@/configs/apiConfig";
import Link from "next/link";
import ProductCard from "@/pages/web/products/ProductCard";

interface FAQItem {
	_id?: string;
	question: string;
	answer: string;
}

const HomePage = () => {
	const [faqData, setFaqData] = useState<FAQItem[]>([]);

	useEffect(() => {
		const fetchFaqs = async () => {
			try {
				const res = await apiClient.get("/faq");
				setFaqData(res.data.slice(0, 5));
			} catch (error) {
				console.error(
					"Failed to fetch FAQs, using static data.",
					error
				);
			}
		};

		fetchFaqs();
	}, []);
	return (
		<main className="max-w-7xl mx-auto py-8">
			<div className="px-6 lg:px-8 mb-8">
				<Hero />
			</div>
			<div>
				<OurServices />
			</div>
			<div>
				<WhyKrishipath />
			</div>
			<div className="container mx-auto px-6 lg:px-8 my-12">
				<h2 className="text-3xl font-semibold text-green-900 text-center mb-4">
					লাইভ আবহাওয়া
				</h2>
				<Weather />
			</div>

			<div className="container mx-auto px-6 lg:px-8">
				<h2 className="text-3xl font-semibold text-green-900 text-center">
					সরাসরি বাজার মূল্য
				</h2>
				<p className="mt-4 text-lg text-gray-600 text-center">
					এখানে বিভিন্ন পণ্যের বর্তমান বাজার মূল্য দেখানো হচ্ছে।
				</p>

				<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
					{productData.map((product, index) => (
						<ProductCard key={index} product={product} />
					))}
				</div>
			</div>
			<div className="container mx-auto px-6 lg:px-8 my-12">
				<h2 className="text-3xl font-semibold text-green-900 text-center">
					কৃষক সাফল্য কাহিনী
				</h2>
				<p className="mt-4 text-lg text-gray-600 text-center">
					আমাদের কৃষকদের সাফল্য কাহিনী দেখুন এবং জানুন কিভাবে তারা
					তাদের কৃষি খামার উন্নত করেছেন।
				</p>

				{/* Grid Layout for Success Stories */}
				<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
					{successStories.map((story, index) => (
						<FarmerSuccessStory
							key={index}
							image={story.image}
							name={story.name}
							location={story.location}
							story={story.story}
						/>
					))}
				</div>
			</div>
			<div className=" px-6 lg:px-8">
				<h2 className="text-3xl font-semibold text-green-900 text-center">
					সাধারণ জিজ্ঞাসা (FAQ)
				</h2>
				<p className="mt-4 text-lg text-gray-600 text-center">
					আমাদের প্রায়শই জিজ্ঞাসিত প্রশ্নগুলি দেখুন।
				</p>

				<div>
					{/* FAQ Component */}
					<FAQ faqData={faqData} />
					<div className="mt-8 flex justify-end">
						<Link href="/faq" passHref>
							<button className="inline-flex items-center gap-2 text-green-600  font-medium px-3 cursor-pointer py-1 rounded-lg  hover:bg-green-700 hover:text-white transition-all duration-300">
								অন্যান্য প্রশ্ন
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									className="w-5 h-5"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
									/>
								</svg>
							</button>
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
};

export default HomePage;
