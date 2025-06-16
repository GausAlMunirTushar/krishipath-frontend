"use client";
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
		<div className="border rounded-xl shadow hover:shadow-md transition-all duration-300 bg-white overflow-hidden">
			{image && (
				<img
					src={image}
					alt="post"
					className="w-full h-48 object-cover"
				/>
			)}
			<div className="p-4 space-y-2">
				<div className="text-base font-semibold text-gray-800">
					{user}{" "}
					<span className="text-sm text-gray-500 font-normal">
						({type})
					</span>
				</div>
				<p className="text-sm text-gray-700">{note}</p>
				<div className="text-sm font-medium text-green-700">
					মূল্য: {price} টাকা{" "}
					<span className="text-gray-600">({unit})</span>
				</div>
				<div className="flex justify-between items-center text-xs text-gray-500">
					<span>{interested} জন আগ্রহী</span>
					<span>{date}</span>
				</div>
				<button className="mt-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm py-2 rounded-md">
					আগ্রহ প্রকাশ করুন
				</button>
			</div>
		</div>
	);
}
