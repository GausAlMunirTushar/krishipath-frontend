import React from "react";

interface MarketPriceFeedProps {
	productName: string;
	productImage: string;
	price: number;
}

const LiveMarketPriceFeed: React.FC<MarketPriceFeedProps> = ({
	productName,
	productImage,
	price,
}) => {
	return (
		<div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-[1.05] hover:shadow-xl cursor-default max-w-md mx-auto sm:max-w-full">
			<div className="flex flex-col sm:flex-row items-center sm:items-start p-5 gap-4 sm:gap-6">
				<img
					src={productImage}
					alt={productName}
					className="w-28 h-28 sm:w-24 sm:h-24 object-cover rounded-xl border border-green-200 flex-shrink-0"
					loading="lazy"
				/>
				<div className="flex flex-col justify-center text-center sm:text-left">
					<h3 className="text-xl sm:text-2xl font-semibold text-green-900 leading-tight">
						{productName}
					</h3>
					<p className="mt-2 text-green-700 font-semibold text-lg sm:text-xl flex items-center justify-center sm:justify-start gap-2">
						বর্তমান বাজার মূল্য:
						<span className="font-bold text-xl sm:text-2xl border-l-4 border-green-500 pl-3">
							{price}৳
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default LiveMarketPriceFeed;
