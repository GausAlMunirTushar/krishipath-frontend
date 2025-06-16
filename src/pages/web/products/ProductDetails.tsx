"use client";

import React from "react";
import { CheckCircle, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Product } from "./ProductCard";

const ProductDetails: React.FC<{ product: Product }> = ({ product }) => {
	return (
		<div className="min-h-screen bg-white py-12 px-6 md:px-16">
			<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
				{/* Left: Product Image */}
				<div className="w-full h-96 bg-gray-50 rounded-xl relative overflow-hidden">
					<Image
						src={product.image}
						alt={product.title}
						fill
						className="object-contain p-6"
					/>
				</div>

				{/* Right: Product Info */}
				<div>
					<h1 className="text-3xl font-bold text-green-800 mb-4">
						{product.title}
					</h1>

					<p className="text-gray-700 text-base leading-relaxed mb-4">
						{product.description}
					</p>

					{product.category && (
						<span className="inline-block mb-4 text-sm text-green-700 bg-green-100 px-3 py-1 rounded-full">
							{product.category}
						</span>
					)}

					<div className="text-2xl text-green-700 font-semibold mb-6">
						{product.basePrice}৳{" "}
						<span className="text-sm font-normal text-gray-500">
							/ {product.unit}
						</span>
					</div>

					{/* Action Buttons */}
					<div className="flex flex-col sm:flex-row gap-4">
						<button className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700 transition-colors">
							<ShoppingCart className="w-4 h-4" />
							কার্টে যোগ করুন
						</button>
						<button className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-green-800 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors">
							<CheckCircle className="w-4 h-4" />
							আরও তথ্য
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
