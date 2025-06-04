"use client";
import React, { useState } from "react";
import Link from "next/link";

const LoginPage: React.FC = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
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
		// Simulate login check (for example purposes)
		if (
			formData.email === "admin@example.com" &&
			formData.password === "password"
		) {
			// Redirect or handle successful login
			alert("Login successful!");
		} else {
			setError("Invalid email or password.");
		}
	};

	return (
		<div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				<div>
					<h2 className="text-center text-3xl font-extrabold text-green-900">
						লগইন করুন
					</h2>
					<p className="mt-2 text-center text-lg text-gray-600">
						আপনার অ্যাকাউন্টে প্রবেশ করতে নিচে আপনার তথ্য দিন
					</p>
				</div>

				{/* Login Form */}
				<form className="mt-8 space-y-6" onSubmit={handleSubmit}>
					<div className="rounded-md shadow-sm -space-y-px">
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
							লগইন
						</button>
					</div>

					{/* Forgot Password and Sign Up Links */}
					<div className="flex items-center justify-between">
						<div className="text-sm">
							<Link href="/forgot-password" passHref>
								<span className="font-medium text-green-600 hover:text-green-500">
									পাসওয়ার্ড ভুলে গেছেন?
								</span>
							</Link>
						</div>
						<div className="text-sm">
							<Link href="/register" passHref>
								<span className="font-medium text-green-600 hover:text-green-500">
									অ্যাকাউন্ট তৈরি করুন
								</span>
							</Link>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginPage;
