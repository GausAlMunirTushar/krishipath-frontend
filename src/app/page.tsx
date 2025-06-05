import faqData from "@/data/faqData";
import FAQ from "@/pages/web/faq/FAQ";

const HomePage = () => {
	return (
		<main className="max-w-7xl mx-auto bg-gray-50 py-16 sm:py-24">
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
