"use client";

import React from "react";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export type Product = {
	id: string;
	title: string;
	description: string;
	image: string;
	unit: string;
	basePrice: number;
	category?: string;
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
	return (
		<div className="bg-white border border-gray-100 hover:border-green-500 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
			{/* Image Section */}
			<div className="relative w-full h-44 bg-gray-50 rounded-t-xl overflow-hidden">
				<Image
					src={product.image}
					alt={product.title}
					fill
					className="object-contain p-4 transition-transform duration-300 hover:scale-105"
				/>
			</div>

			{/* Content Section */}
			<div className="flex flex-col justify-between flex-1 p-5">
				<div>
					<h3 className="text-lg font-semibold text-gray-900">
						{product.title}
					</h3>
					<p className="mt-2 text-gray-600 text-sm line-clamp-2 truncate">
						{product.description}
					</p>

					<div className="flex justify-between items-center mt-3">
						{product.category && (
							<span className="text-xs font-medium text-green-700 bg-green-100 px-3 py-1 rounded-full">
								{product.category}
							</span>
						)}
						<div className="text-sm text-gray-700">
							<span className="text-green-700 font-bold">
								{product.basePrice}৳
							</span>{" "}
							/ {product.unit}
						</div>
					</div>
				</div>

				{/* Button Section */}
				<div className="mt-3">
					<Link
						href={`/products/${product.id}`}
						className="w-full cursor-pointer flex items-center justify-center gap-2 text-sm font-medium bg-green-600 text-white hover:bg-green-700 transition-colors px-4 py-2 rounded-md"
					>
						<CheckCircle className="w-4 h-4" />
						বিস্তারিত দেখুন
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
