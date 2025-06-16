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
		<div className="border-2 border-green-500 rounded-xl bg-white shadow-sm hover:shadow-md transition-all overflow-hidden">
			{/* Image */}
			{image && (
				<div className="flex justify-center p-4 pb-0">
					<img
						src={image}
						alt="post"
						className="w-28 h-28 rounded-full object-cover border"
					/>
				</div>
			)}

			{/* Content */}
			<div className="bg-white px-4 py-4 space-y-2">
				{/* User and Type */}
				<h3 className="text-lg font-bold text-gray-800">
					{user}{" "}
					<span className="text-sm font-normal text-gray-500">
						({type})
					</span>
				</h3>

				{/* Note */}
				<p className="text-sm text-gray-600">{note}</p>

				{/* Badge and Price */}
				<div className="flex justify-between items-center">
					<span className="text-xs bg-green-100 text-green-700 font-semibold px-3 py-1 rounded-full">
						{type}
					</span>
					<span className="text-sm font-semibold text-green-800">
						{price}৳ / {unit}
					</span>
				</div>

				{/* Interested + Date */}
				<div className="flex justify-between text-xs text-gray-500">
					<span>{interested} জন আগ্রহী</span>
					<span>{date}</span>
				</div>

				{/* Button */}
				<button className="w-full mt-2 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm py-2 rounded-md transition">
					<CheckCircle className="w-4 h-4" />
					বিস্তারিত দেখুন
				</button>
			</div>
		</div>
	);
}
