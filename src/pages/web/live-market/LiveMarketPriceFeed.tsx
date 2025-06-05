import React from "react";

interface PriceComparison {
	sellerName: string;
	wholesalePrice: number;
	retailPrice: number;
}

interface MarketPriceFeedProps {
	productName: string;
	productImage: string;
	priceComparison: PriceComparison[];
}

const LiveMarketPriceFeed: React.FC<MarketPriceFeedProps> = ({
	productName,
	productImage,
	priceComparison,
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
				</div>
			</div>

			<div className="p-4">
				<h4 className="text-lg font-semibold text-green-800">
					Price Comparison
				</h4>
				<table className="min-w-full mt-4">
					<thead>
						<tr>
							<th className="px-4 py-2 text-left">Seller</th>
							<th className="px-4 py-2 text-left">
								Wholesale Price
							</th>
							<th className="px-4 py-2 text-left">
								Retail Price
							</th>
						</tr>
					</thead>
					<tbody>
						{priceComparison.map((item, index) => (
							<tr key={index} className="border-t">
								<td className="px-4 py-2">{item.sellerName}</td>
								<td className="px-4 py-2 text-green-600">
									{item.wholesalePrice}৳
								</td>
								<td className="px-4 py-2 text-green-600">
									{item.retailPrice}৳
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default LiveMarketPriceFeed;
