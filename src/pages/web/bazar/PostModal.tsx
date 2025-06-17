import { X, ImagePlus, ChevronDown } from "lucide-react";
import { useState } from "react";

type Product = {
	id: string;
	name: string;
};

const products: Product[] = [
	{ id: "p1", name: "ধান" },
	{ id: "p2", name: "গম" },
	{ id: "p3", name: "সরিষা" },
	{ id: "p4", name: "আলু" },
];

export default function PostModal({
	isOpen,
	onClose,
}: {
	isOpen: boolean;
	onClose: () => void;
}) {
	const [postType, setPostType] = useState<string>("");
	const [unit, setUnit] = useState<string>("");
	const [productId, setProductId] = useState<string>("");
	const [price, setPrice] = useState<string>("");
	const [description, setDescription] = useState<string>("");
	const [imageFile, setImageFile] = useState<File | null>(null);

	if (!isOpen) return null;

	// Handle image input change
	function onImageChange(e: React.ChangeEvent<HTMLInputElement>) {
		if (e.target.files && e.target.files[0]) {
			setImageFile(e.target.files[0]);
		}
	}

	// Submit handler placeholder
	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		// Collect and process form data here
		console.log({
			postType,
			unit,
			productId,
			price,
			description,
			imageFile,
		});
		// Reset or close modal as needed
		onClose();
	}

	return (
		<div className="fixed inset-0 z-50 bg-black/30 backdrop-blur flex items-center justify-center px-4">
			<div className="bg-white w-full max-w-md rounded-lg shadow-xl p-6 relative">
				{/* Close Button */}
				<button
					onClick={onClose}
					className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
					aria-label="Close modal"
				>
					<X className="w-5 h-5" />
				</button>

				{/* Title */}
				<h2 className="text-lg font-bold mb-4 border-b pb-2 text-gray-800">
					পোস্ট তৈরি করুন
				</h2>

				{/* Form */}
				<form className="space-y-4" onSubmit={handleSubmit}>
					{/* Post Type Dropdown */}
					<div className="relative">
						<select
							required
							value={postType}
							onChange={(e) => setPostType(e.target.value)}
							className="w-full appearance-none border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
						>
							<option value="" disabled>
								প্রকার (ক্রয় / বিক্রয়) নির্বাচন করুন
							</option>
							<option value="ক্রয়">ক্রয়</option>
							<option value="বিক্রয়">বিক্রয়</option>
						</select>
						{/* Custom arrow icon */}
						<ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500" />
					</div>

					{/* Product Dropdown */}
					<div className="relative">
						<select
							required
							value={productId}
							onChange={(e) => setProductId(e.target.value)}
							className="w-full appearance-none border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
						>
							<option value="" disabled>
								পণ্যের নাম নির্বাচন করুন
							</option>
							{products.map((product) => (
								<option key={product.id} value={product.id}>
									{product.name}
								</option>
							))}
						</select>
						<ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500" />
					</div>

					{/* Price Input */}
					<input
						type="number"
						placeholder="মূল্য"
						value={price}
						onChange={(e) => setPrice(e.target.value)}
						min="0"
						step="any"
						required
						className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
					/>

					{/* Unit Dropdown */}
					<div className="relative">
						<select
							required
							value={unit}
							onChange={(e) => setUnit(e.target.value)}
							className="w-full appearance-none border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
						>
							<option value="" disabled>
								একক (যেমন: কেজি) নির্বাচন করুন
							</option>
							<option value="কেজি">কেজি</option>
							<option value="টন">টন</option>
							<option value="বস্তা">বস্তা</option>
							<option value="কুইন্টাল">কুইন্টাল</option>
							<option value="পিস">পিস</option>
						</select>
						<ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500" />
					</div>

					{/* Description */}
					<textarea
						placeholder="স্টেটাস / বর্ণনা"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						rows={3}
						className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
					/>

					{/* Image Upload */}
					<label
						htmlFor="image-upload"
						className="flex items-center gap-2 border rounded px-3 py-2 cursor-pointer hover:bg-gray-100 transition"
					>
						<ImagePlus className="w-4 h-4 text-gray-600" />
						<span className="text-sm text-gray-700">
							{imageFile ? "ছবি যোগ করা হয়েছে" : "ছবি যোগ করুন"}
						</span>
					</label>
					<input
						id="image-upload"
						type="file"
						accept="image/*"
						onChange={onImageChange}
						className="hidden"
					/>

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
