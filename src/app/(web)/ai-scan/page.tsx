"use client";

import { useState } from "react";
import { UploadCloud, LoaderCircle } from "lucide-react";

export default function AiScanPage() {
	const [file, setFile] = useState<File | null>(null);
	const [loading, setLoading] = useState(false);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const uploadedFile = e.target.files?.[0] || null;
		setFile(uploadedFile);
		if (uploadedFile) {
			setLoading(true);
			// ডেমো বিশ্লেষণ ডিলে
			setTimeout(() => setLoading(false), 2000);
		}
	};

	return (
		<div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-12">
			<div className="max-w-3xl w-full bg-white shadow-xl rounded-xl p-8">
				<h1 className="text-3xl md:text-4xl font-bold text-center text-green-600 mb-4">
					এআই স্ক্যান ও বিশ্লেষণ
				</h1>
				<p className="text-center text-gray-600 mb-8">
					যেকোনো ছবি, নথি বা হাতে লেখা তথ্য আপলোড করুন। আমাদের
					বুদ্ধিমান এআই সিস্টেম স্বয়ংক্রিয়ভাবে তথ্য বিশ্লেষণ করবে এবং
					গুরুত্বপূর্ণ ইনসাইট জানাবে।
				</p>

				{/* ফাইল আপলোড */}
				<label className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-green-500 transition mb-6">
					<UploadCloud className="w-10 h-10 text-gray-400 mb-2" />
					<span className="text-gray-600">
						ক্লিক করুন বা ফাইল টেনে এনে আপলোড করুন
					</span>
					<input type="file" hidden onChange={handleFileChange} />
				</label>

				{/* ফাইল প্রিভিউ */}
				{file && !loading && (
					<div className="bg-gray-100 p-4 rounded mb-4">
						<p className="font-semibold text-gray-700">
							নির্বাচিত ফাইল:
						</p>
						<p className="text-sm text-gray-600">{file.name}</p>
					</div>
				)}

				{/* লোডিং স্টেট */}
				{loading && (
					<div className="flex items-center gap-2 justify-center text-gray-600">
						<LoaderCircle className="animate-spin" />
						<span>এআই বিশ্লেষণ চলছে...</span>
					</div>
				)}

				{/* ডেমো বিশ্লেষণ ফলাফল */}
				{!loading && file && (
					<div className="mt-6 bg-white border rounded-lg p-4 shadow-sm">
						<h3 className="text-lg font-semibold text-green-700 mb-2">
							এআই বিশ্লেষণ ফলাফল:
						</h3>
						<ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
							<li>
								ধরন শনাক্ত: <strong>হাতে লেখা নোট</strong>
							</li>
							<li>
								গুরুত্বপূর্ণ শব্দ: “মাটি”, “সার”, “ফসল উৎপাদন”
							</li>
							<li>সাজেস্টেড ট্যাগ: #কৃষি, #মাটি, #সার</li>
							<li>
								নিশ্চয়তার মাত্রা: <strong>৯২%</strong>
							</li>
						</ul>
					</div>
				)}
			</div>
		</div>
	);
}
