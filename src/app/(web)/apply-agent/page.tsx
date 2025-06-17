"use client";

import React from "react";

const ApplyAgentPage = () => {
	return (
		<div className="bg-white text-gray-900">
			{/* 🖼️ Hero Section */}
			<section className="bg-green-50 py-12 px-4 text-center">
				<div className="max-w-4xl mx-auto">
					<h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
						কৃষকদের পাশে থেকে কাজ করার সুযোগ
					</h1>
					<p className="text-lg text-gray-700 mb-6">
						KrishiPath এর কৃষি এজেন্ট হিসেবে যুক্ত হয়ে কর্মসংস্থান
						এবং সমাজে অবদান রাখার সুযোগ পান।
					</p>
					<a
						href="#apply"
						className="inline-block bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
					>
						আবেদন করুন এখনই
					</a>
				</div>
			</section>

			{/* ✅ Eligibility Section */}
			<section className="py-10 px-4 bg-white">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-2xl font-bold mb-6 text-center">
						যারা আবেদন করতে পারবেন
					</h2>
					<ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 text-gray-700 list-disc list-inside">
						<li>স্থানীয় যুবক / উদ্যোক্তা</li>
						<li>কৃষি ডিপ্লোমা / গ্র্যাজুয়েট</li>
						<li>
							স্মার্টফোন ব্যবহারকারী এবং ইন্টারনেট সুবিধাযুক্ত
						</li>
						<li>কৃষকদের সহায়তায় আগ্রহী ব্যক্তি</li>
					</ul>
				</div>
			</section>

			{/* ✅ Responsibilities */}
			<section className="py-10 px-4 bg-green-50">
				<div className="max-w-5xl mx-auto">
					<h2 className="text-2xl font-bold mb-6 text-center">
						এজেন্টের দায়িত্বসমূহ
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
						<p>📌 কৃষকদের তথ্য সংগ্রহ করা</p>
						<p>📌 কৃষি সেবা এবং প্রযুক্তি সম্পর্কে জানানো</p>
						<p>📌 কৃষিপণ্য বাজার সম্পর্কে আপডেট সরবরাহ</p>
						<p>📌 কৃষিপথ অ্যাপে তথ্য আপডেট রাখা</p>
					</div>
				</div>
			</section>

			{/* ✅ Benefits */}
			<section className="py-10 px-4 bg-white">
				<div className="max-w-5xl mx-auto">
					<h2 className="text-2xl font-bold mb-6 text-center">
						আপনার সুবিধাসমূহ
					</h2>
					<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-green-700 font-semibold">
						<div className="bg-green-100 p-4 rounded-xl">
							💸 কমিশন ভিত্তিক উপার্জন
						</div>
						<div className="bg-green-100 p-4 rounded-xl">
							🧾 প্রয়োজনীয় প্রশিক্ষণ
						</div>
						<div className="bg-green-100 p-4 rounded-xl">
							🌱 সমাজে অবদান
						</div>
						<div className="bg-green-100 p-4 rounded-xl">
							📱 ডিজিটাল টুলস ব্যবহার
						</div>
					</div>
				</div>
			</section>

			{/* ✅ Application Form */}
			<section id="apply" className="py-12 px-4 bg-green-50">
				<div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
					<h2 className="text-2xl font-bold mb-6 text-center">
						প্রাথমিক আবেদন ফর্ম
					</h2>
					<form className="space-y-4">
						<div>
							<label className="block text-gray-700">নাম *</label>
							<input
								type="text"
								className="w-full mt-1 border border-gray-300 rounded-md px-4 py-2"
								required
							/>
						</div>
						<div>
							<label className="block text-gray-700">
								মোবাইল নাম্বার *
							</label>
							<input
								type="tel"
								className="w-full mt-1 border border-gray-300 rounded-md px-4 py-2"
								required
							/>
						</div>
						<div>
							<label className="block text-gray-700">
								ঠিকানা *
							</label>
							<textarea
								className="w-full mt-1 border border-gray-300 rounded-md px-4 py-2"
								rows={2}
								required
							/>
						</div>
						<div>
							<label className="block text-gray-700">
								শিক্ষাগত যোগ্যতা *
							</label>
							<input
								type="text"
								className="w-full mt-1 border border-gray-300 rounded-md px-4 py-2"
								required
							/>
						</div>
						<div>
							<label className="block text-gray-700">
								অভিজ্ঞতা (ঐচ্ছিক)
							</label>
							<input
								type="text"
								className="w-full mt-1 border border-gray-300 rounded-md px-4 py-2"
							/>
						</div>
						<div>
							<label className="block text-gray-700">
								কেন এজেন্ট হতে চান?
							</label>
							<textarea
								className="w-full mt-1 border border-gray-300 rounded-md px-4 py-2"
								rows={3}
							/>
						</div>
						<div>
							<label className="block text-gray-700">
								ছবি আপলোড (ঐচ্ছিক)
							</label>
							<input
								type="file"
								accept="image/*"
								className="w-full mt-1"
							/>
						</div>
						<button
							type="submit"
							className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition"
						>
							আবেদন জমা দিন
						</button>
					</form>
				</div>
			</section>

			{/* ✅ Call to Action Footer */}
			<section className="py-10 bg-green-700 text-white text-center">
				<h3 className="text-2xl font-semibold mb-2">
					আপনার এলাকায় কৃষকদের সহায়তা করতে আজই আবেদন করুন
				</h3>
				<a
					href="#apply"
					className="inline-block mt-4 bg-white text-green-700 font-semibold px-6 py-2 rounded-full hover:bg-gray-100"
				>
					এখনই আবেদন করুন
				</a>
			</section>
		</div>
	);
};

export default ApplyAgentPage;
