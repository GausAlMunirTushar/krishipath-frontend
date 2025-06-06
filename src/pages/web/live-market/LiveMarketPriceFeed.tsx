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
		<div className="bg-white shadow-lg rounded-lg overflow-hidden">
			<div className="flex items-center p-4">
				<img
					src={productImage}
					alt={productName}
					className="w-16 h-16 object-cover rounded-lg mr-4"
				/>
				<div>
					<h3 className="text-xl font-semibold text-green-900">
						{productName}
					</h3>
					<p className="mt-1 text-green-700 font-medium text-lg">
						বর্তমান বাজার মূল্য:{" "}
						<span className="font-bold">{price}৳</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default LiveMarketPriceFeed;
