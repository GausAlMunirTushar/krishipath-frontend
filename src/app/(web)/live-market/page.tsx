import productData from "@/data/productData";

const LiveMarketPriceFeedPage: React.FC = () => {
	if (!productData || productData.length === 0) {
		return (
			<div className="min-h-screen bg-gray-50 py-16 sm:py-24 lg:py-32">
				<div className="container mx-auto px-6 lg:px-8">
					<h2 className="text-3xl font-semibold text-green-900 text-center">
						লাইভ মার্কেট প্রাইস ফিড
					</h2>
					<p className="mt-4 text-lg text-gray-600 text-center">
						কোন পণ্য তথ্য পাওয়া যায়নি।
					</p>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gray-50 py-16 sm:py-24 lg:py-32">
			<div className="container mx-auto px-6 lg:px-8">
				<h2 className="text-3xl font-semibold text-green-900 text-center">
					লাইভ মার্কেট প্রাইস ফিড
				</h2>
				<p className="mt-4 text-lg text-gray-600 text-center">
					এখানে বিভিন্ন পণ্যের বর্তমান বাজার মূল্য দেখানো হচ্ছে।
				</p>
			</div>
		</div>
	);
};

export default LiveMarketPriceFeedPage;
