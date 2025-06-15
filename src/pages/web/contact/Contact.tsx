/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import { submitContactForm } from "@/services/contactServices";

const Contact: React.FC = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [status, setStatus] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setStatus(null);

		try {
			await submitContactForm(formData);
			setStatus("আপনার বার্তাটি সফলভাবে পাঠানো হয়েছে!");
			setFormData({ name: "", email: "", message: "" });
		} catch (error: any) {
			setStatus(error.message || "বার্তা পাঠাতে ব্যর্থ হয়েছে।");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="bg-gray-50 py-10 sm:py-20">
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				{/* Header Section */}
				<div className="text-center mb-12">
					<h2 className="text-3xl font-semibold text-green-900">
						যোগাযোগ করুন
					</h2>
					<p className="mt-4 text-lg text-gray-600">
						আপনার যেকোনো প্রশ্ন, পরামর্শ বা মন্তব্য আমাদের সাথে
						শেয়ার করুন।
					</p>
				</div>

				<div className="lg:flex lg:space-x-12">
					{/* Contact Form */}
					<div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
						<h3 className="text-2xl font-semibold text-green-800">
							যোগাযোগ ফর্ম
						</h3>
						<form
							onSubmit={handleSubmit}
							className="space-y-4 mt-6"
						>
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium text-gray-700"
								>
									নাম
								</label>
								<input
									type="text"
									name="name"
									id="name"
									required
									value={formData.name}
									onChange={handleInputChange}
									className="mt-2 w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500"
									placeholder="আপনার নাম লিখুন"
								/>
							</div>

							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700"
								>
									ইমেল
								</label>
								<input
									type="email"
									name="email"
									id="email"
									required
									value={formData.email}
									onChange={handleInputChange}
									className="mt-2 w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500"
									placeholder="আপনার ইমেল ঠিকানা লিখুন"
								/>
							</div>

							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium text-gray-700"
								>
									বার্তা
								</label>
								<textarea
									name="message"
									id="message"
									required
									value={formData.message}
									onChange={handleInputChange}
									className="mt-2 w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-green-500"
									placeholder="আপনার বার্তা লিখুন"
									rows={6}
								></textarea>
							</div>

							<button
								type="submit"
								disabled={loading}
								className="w-full bg-green-600 text-white p-3 rounded-md hover:bg-green-500 focus:ring-2 focus:ring-green-500 disabled:opacity-50"
							>
								{loading ? "পাঠানো হচ্ছে..." : "পাঠান"}
							</button>

							{status && (
								<p className="mt-4 text-green-600">{status}</p>
							)}
						</form>
					</div>

					{/* Contact Info Section */}
					<div className="lg:w-1/2 mt-12 lg:mt-0">
						<h3 className="text-2xl font-semibold text-green-800">
							আমাদের ঠিকানা
						</h3>
						<div className="mt-4 space-y-2 text-gray-600">
							<p>
								<strong>ফোন:</strong> +8801796 015069
							</p>
							<p>
								<strong>ইমেল:</strong> krishipathbd@gmail.com
							</p>
							<p>
								<strong>ঠিকানা:</strong> বালিয়াডাঙ্গী সদর,
								ঠাকুরগাঁও, বাংলাদেশ
							</p>
						</div>

						{/* Google Map Embed */}
						<div className="mt-8">
							<h4 className="text-xl font-semibold text-green-800">
								আমাদের অবস্থান
							</h4>
							<div className="mt-4">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d74497.36127483565!2d88.26336224999999!3d26.09763185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4e6965572045d%3A0x86ff31e8a580f296!2sBaliadangi%20Upazila!5e1!3m2!1sen!2sbd!4v1749959893486!5m2!1sen!2sbd"
									width="100%"
									height="350"
									style={{ border: 0 }}
									loading="lazy"
								></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
