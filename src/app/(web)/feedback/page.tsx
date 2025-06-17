"use client";
import { useState } from "react";
import { Send } from "lucide-react";

export default function FeedbackPage() {
	const [form, setForm] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [submitted, setSubmitted] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// বাস্তবিক API সংযোগ এখানে যোগ করুন
		console.log(form);
		setSubmitted(true);
	};

	return (
		<main className=" bg-gray-50 py-10 px-4">
			<div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
				<h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-2">
					সমস্যা / মতামত জানান
				</h1>
				<p className="text-center text-gray-600 mb-6">
					অ্যাপ, ওয়েবসাইট বা অন্যান্য যেকোনো সমস্যার জন্য নিচের
					ফর্মটি পূরণ করুন।
				</p>

				{submitted ? (
					<div className="text-center text-green-600 font-semibold">
						✅ ধন্যবাদ! আপনার মতামত আমরা গ্রহণ করেছি।
					</div>
				) : (
					<form onSubmit={handleSubmit} className="space-y-4">
						<input
							type="text"
							name="name"
							placeholder="আপনার নাম"
							value={form.name}
							onChange={handleChange}
							required
							className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
						/>
						<input
							type="email"
							name="email"
							placeholder="ইমেইল"
							value={form.email}
							onChange={handleChange}
							required
							className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
						/>
						<input
							type="text"
							name="subject"
							placeholder="বিষয় (যেমন: অ্যাপ বাগ, পরামর্শ)"
							value={form.subject}
							onChange={handleChange}
							required
							className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
						/>
						<textarea
							name="message"
							rows={5}
							placeholder="আপনার সমস্যা বা মতামত লিখুন..."
							value={form.message}
							onChange={handleChange}
							required
							className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
						></textarea>
						<button
							type="submit"
							className="w-full bg-green-600 text-white flex items-center justify-center gap-2 py-2 rounded hover:bg-green-700 transition"
						>
							<Send className="w-4 h-4" /> জমা দিন
						</button>
					</form>
				)}
			</div>
		</main>
	);
}
