"use client";
import { CheckCircle } from "lucide-react";
import React from "react";

interface PostProps {
	user: string;
	type: string;
	image?: string;
	price: string;
	unit: string;
	date: string;
	interested: number;
	note: string;
}

export default function PostCard({
	user,
	type,
	image,
	price,
	unit,
	date,
	interested,
	note,
}: PostProps) {
	return (
		<div className="border border-gray-200 rounded-lg hover:border-green-500 bg-white shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden">
			{/* Image Full Width */}
			{image && (
				<img
					src={image}
					alt="post"
					className="w-full h-40 object-contain rounded-t-sm border-b border-gray-200"
				/>
			)}

			{/* Content */}
			<div className="flex flex-col justify-between p-4 flex-1 space-y-2">
				{/* Title */}
				<h3 className="text-base font-bold text-gray-800">
					{user}{" "}
					<span className="text-sm font-normal text-gray-500">
						({type})
					</span>
				</h3>

				{/* Note */}
				<p className="text-sm text-gray-600 line-clamp-2">{note}</p>

				{/* Badge and Price */}
				<div className="flex justify-between items-center">
					<span className="text-xs bg-green-100 text-green-700 font-semibold px-2 py-1 rounded">
						{type}
					</span>
					<span className="text-sm font-semibold text-green-800">
						{price}৳ / {unit}
					</span>
				</div>

				{/* Meta */}
				<div className="flex justify-between text-xs text-gray-500">
					<span>{interested} জন আগ্রহী</span>
					<span>{date}</span>
				</div>

				{/* Action */}
				<button className="mt-2 w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm py-2 rounded-md transition">
					<CheckCircle className="w-4 h-4" />
					বিস্তারিত দেখুন
				</button>
			</div>
		</div>
	);
}
