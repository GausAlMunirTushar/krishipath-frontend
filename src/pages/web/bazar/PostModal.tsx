import { X, ImagePlus } from "lucide-react";

export default function PostModal({
	isOpen,
	onClose,
}: {
	isOpen: boolean;
	onClose: () => void;
}) {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 bg-black/30 backdrop-blur flex items-center justify-center px-4">
			<div className="bg-white w-full max-w-md rounded-lg shadow-xl p-6 relative">
				{/* Close Button */}
				<button
					onClick={onClose}
					className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
				>
					<X className="w-5 h-5" />
				</button>

				{/* Title */}
				<h2 className="text-lg font-bold mb-4 border-b pb-2 text-gray-800">
					পোস্ট তৈরি করুন
				</h2>

				{/* Form */}
				<form className="space-y-4">
					<input
						type="text"
						placeholder="প্রকার (ক্রয় / বিক্রয়)"
						className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
					/>
					<textarea
						placeholder="স্টেটাস"
						className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
					/>
					<input
						type="text"
						placeholder="মূল্য"
						className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
					/>
					<input
						type="text"
						placeholder="একক (যেমন: কেজি)"
						className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
					/>

					{/* Image Upload */}
					<label className="flex items-center gap-2 border rounded px-3 py-2 cursor-pointer hover:bg-gray-100 transition">
						<ImagePlus className="w-4 h-4 text-gray-600" />
						<span className="text-sm text-gray-700">
							ছবি যোগ করুন
						</span>
						<input type="file" hidden />
					</label>

					{/* Submit Button */}
					<button
						type="submit"
						className="bg-green-600 text-white px-4 py-2 rounded w-full hover:bg-green-700 transition"
					>
						পোস্ট করুন
					</button>
				</form>
			</div>
		</div>
	);
}
