"use client";
import React, { useState } from "react";

const ResetPasswordPage: React.FC = () => {
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [message, setMessage] = useState<string | null>(null);

	// Handle input changes
	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	const handleConfirmPasswordChange = (
		e: React.ChangeEvent<HTMLInputElement>
	) => {
		setConfirmPassword(e.target.value);
	};

	// Handle form submission (Simulate success)
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			setMessage("পাসওয়ার্ড এবং কনফার্ম পাসওয়ার্ড মেলেনি।");
			return;
		}
		setMessage("আপনার পাসওয়ার্ড সফলভাবে রিসেট হয়েছে।");
	};

	return (
		<div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				<h2 className="text-center text-3xl font-extrabold text-green-900">
					পাসওয়ার্ড রিসেট করুন
				</h2>
				<p className="mt-2 text-center text-lg text-gray-600">
					নতুন পাসওয়ার্ড তৈরি করতে নীচে তথ্য দিন।
				</p>

				{/* Reset Password Form */}
				<form className="mt-8 space-y-6" onSubmit={handleSubmit}>
					<div className="rounded-md shadow-sm -space-y-px">
						{/* Password Input */}
						<div>
							<label htmlFor="password" className="sr-only">
								পাসওয়ার্ড
							</label>
							<input
								id="password"
								name="password"
								type="password"
								required
								value={password}
								onChange={handlePasswordChange}
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
								placeholder="নতুন পাসওয়ার্ড"
							/>
						</div>

						{/* Confirm Password Input */}
						<div>
							<label
								htmlFor="confirmPassword"
								className="sr-only"
							>
								কনফার্ম পাসওয়ার্ড
							</label>
							<input
								id="confirmPassword"
								name="confirmPassword"
								type="password"
								required
								value={confirmPassword}
								onChange={handleConfirmPasswordChange}
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
								placeholder="কনফার্ম পাসওয়ার্ড"
							/>
						</div>
					</div>

					{/* Error or Success Message */}
					{message && (
						<p className="text-red-500 text-sm mt-2">{message}</p>
					)}

					{/* Submit Button */}
					<div>
						<button
							type="submit"
							className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
						>
							পাসওয়ার্ড রিসেট করুন
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ResetPasswordPage;
