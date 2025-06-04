"use client";
import React, { useState } from "react";

const VerifyEmailPage: React.FC = () => {
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState<string | null>(null);

	// Handle input changes
	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	// Handle form submission (simulate verification)
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Simulate sending verification link
		setMessage("ইমেল যাচাইয়ের লিঙ্ক আপনার ইমেলে পাঠানো হয়েছে।");
		setEmail(""); // Reset email field
	};

	return (
		<div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				<h2 className="text-center text-3xl font-extrabold text-green-900">
					ইমেল যাচাই করুন
				</h2>
				<p className="mt-2 text-center text-lg text-gray-600">
					ইমেল যাচাই করতে নীচে আপনার ইমেল ঠিকানা দিন।
				</p>

				{/* Email Verification Form */}
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
								value={email}
								onChange={handleEmailChange}
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
								placeholder="ইমেল"
							/>
						</div>
					</div>

					{/* Success Message */}
					{message && (
						<p className="text-green-600 text-sm mt-2">{message}</p>
					)}

					{/* Submit Button */}
					<div>
						<button
							type="submit"
							className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
						>
							যাচাই লিঙ্ক পাঠান
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default VerifyEmailPage;
