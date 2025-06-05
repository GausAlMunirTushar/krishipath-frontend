import productData from "@/data/productData";
import LiveMarketPriceFeed from "@/pages/web/live-market/LiveMarketPriceFeed";

const LiveMarketPriceFeedPage: React.FC = () => {
	return (
		<div className="min-h-screen bg-gray-50 py-16 sm:py-24 lg:py-32">
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
		</div>
	);
};

export default LiveMarketPriceFeedPage;
