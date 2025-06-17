"use client";

import DivisionMap from "./DivisionMap";

const sampleProducts = [
	{ id: "1", name: "Potato", price: 30, division: "Dhaka" },
	{ id: "2", name: "Onion", price: 40, division: "Rajshahi" },
	{ id: "3", name: "Garlic", price: 55, division: "Khulna" },
];

export default function DivisionMapWrapper() {
	return (
		<div className="max-w-7xl mx-auto p-6">
			<DivisionMap productData={sampleProducts} />
		</div>
	);
}
