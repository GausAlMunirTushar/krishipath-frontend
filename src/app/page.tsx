import faqData from "@/data/faqData";
import productData from "@/data/productData";
import successStories from "@/data/successStories";
import FAQ from "@/pages/web/faq/FAQ";
import LiveMarketPriceFeed from "@/pages/web/live-market/LiveMarketPriceFeed";
import FarmerSuccessStory from "@/pages/web/success-story/FarmerSuccessStory";

const HomePage = () => {
	return (
		<main className="max-w-7xl mx-auto  py-16 sm:py-24">
			<div className="container mx-auto px-6 lg:px-8">
				<h2 className="text-3xl font-semibold text-green-900 text-center">
					লাইভ মার্কেট প্রাইস ফিড
				</h2>
				<p className="mt-4 text-lg text-gray-600 text-center">
					এখানে বিভিন্ন পণ্যের লাইভ মার্কেট প্রাইসের তুলনা দেখানো
					হচ্ছে।
				</p>

				<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
					{productData.map((product, index) => (
						<LiveMarketPriceFeed
							key={index}
							productName={product.productName}
							productImage={product.productImage}
							priceComparison={product.priceComparison}
						/>
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

				{/* FAQ Component */}
				<FAQ faqData={faqData} />
			</div>
		</main>
	);
};

export default HomePage;
