"use client";
import React, { useState } from "react";
import Link from "next/link";

const RegisterPage: React.FC = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [error, setError] = useState<string | null>(null);

	// Handle input changes
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	// Handle form submission
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// Basic validation
		if (formData.password !== formData.confirmPassword) {
			setError("পাসওয়ার্ড এবং কনফার্ম পাসওয়ার্ড মেলেনি।");
			return;
		}

		// Simulate registration (add your logic here)
		alert("আপনার নিবন্ধন সফল হয়েছে!");

		// Reset form data after successful submission
		setFormData({
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		});
	};

	return (
		<div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				<div>
					<h2 className="text-center text-3xl font-extrabold text-green-900">
						নিবন্ধন করুন
					</h2>
					<p className="mt-2 text-center text-lg text-gray-600">
						আপনার নতুন অ্যাকাউন্ট তৈরি করতে নিচে তথ্য দিন।
					</p>
				</div>

				{/* Register Form */}
				<form className="mt-8 space-y-6" onSubmit={handleSubmit}>
					<div className="rounded-md shadow-sm -space-y-px">
						{/* Name Input */}
						<div>
							<label htmlFor="name" className="sr-only">
								নাম
							</label>
							<input
								id="name"
								name="name"
								type="text"
								required
								value={formData.name}
								onChange={handleInputChange}
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
								placeholder="নাম"
							/>
						</div>

						{/* Email Input */}
						<div>
							<label htmlFor="email" className="sr-only">
								ইমেল
							</label>
							<input
								id="email"
								name="email"
								type="email"
								required
								value={formData.email}
								onChange={handleInputChange}
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
								placeholder="ইমেল"
							/>
						</div>

						{/* Password Input */}
						<div className="mt-4">
							<label htmlFor="password" className="sr-only">
								পাসওয়ার্ড
							</label>
							<input
								id="password"
								name="password"
								type="password"
								required
								value={formData.password}
								onChange={handleInputChange}
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
								placeholder="পাসওয়ার্ড"
							/>
						</div>

						{/* Confirm Password Input */}
						<div className="mt-4">
							<label
								htmlFor="confirmPassword"
								className="sr-only"
							>
								পাসওয়ার্ড নিশ্চিত করুন
							</label>
							<input
								id="confirmPassword"
								name="confirmPassword"
								type="password"
								required
								value={formData.confirmPassword}
								onChange={handleInputChange}
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
								placeholder="পাসওয়ার্ড নিশ্চিত করুন"
							/>
						</div>
					</div>

					{/* Error Message */}
					{error && (
						<p className="text-red-500 text-sm mt-2">{error}</p>
					)}

					{/* Submit Button */}
					<div>
						<button
							type="submit"
							className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
						>
							নিবন্ধন করুন
						</button>
					</div>

					{/* Already have an account? Link */}
					<div className="flex items-center justify-between">
						<div className="text-sm">
							<Link href="/login" passHref>
								<span className="font-medium text-green-600 hover:text-green-500">
									আপনার অ্যাকাউন্ট আছে? লগইন করুন
								</span>
							</Link>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default RegisterPage;
