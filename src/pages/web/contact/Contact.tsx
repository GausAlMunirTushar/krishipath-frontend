"use client";
import React, { useState } from "react";

const Contact: React.FC = () => {
	// State for form submission
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [status, setStatus] = useState<string | null>(null);

	// Handle form input change
	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	// Handle form submission
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Simulating form submission success
		setStatus("Your message has been sent successfully!");
		// Reset form data
		setFormData({
			name: "",
			email: "",
			message: "",
		});
	};

	return (
		<div className="bg-gray-50 py-16 sm:py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				{/* Header Section */}
				<div className="text-center mb-12">
					<h2 className="text-3xl font-semibold text-green-900">
						যোগাযোগ করুন
					</h2>
					<p className="mt-4 text-lg text-gray-600">
						আপনার যেকোনো প্রশ্ন, পরামর্শ বা মন্তব্য আমাদের সাথে
						শেয়ার করুন। আমরা আপনাকে সহায়তা করতে প্রস্তুত।
					</p>
				</div>

				{/* Contact Form Section */}
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
								className="w-full bg-green-600 text-white p-3 rounded-md hover:bg-green-500 focus:ring-2 focus:ring-green-500"
							>
								পাঠান
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
						<div className="mt-6 space-y-4 text-gray-600">
							<p>
								<strong>ফোন:</strong> ৬৬৬ ৮৮৮ ০০০০
							</p>
							<p>
								<strong>ইমেল:</strong> needhelp@company.com
							</p>
							<p>
								<strong>ঠিকানা:</strong> ৮০ ব্রুকলিন গোল্ডেন
								স্ট্রীট লাইন, নিউইয়র্ক, USA
							</p>
						</div>

						{/* Google Map Embed */}
						<div className="mt-8">
							<h4 className="text-xl font-semibold text-green-800">
								আমাদের অবস্থান
							</h4>
							<div className="mt-4">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.283724846374!2d144.9630583153156!3d-37.81362797975186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43b16f1b1f%3A0x5045675218ce650!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1606179206145!5m2!1sen!2sus"
									width="100%"
									height="320"
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
