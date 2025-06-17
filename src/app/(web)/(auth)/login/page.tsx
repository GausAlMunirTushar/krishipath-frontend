"use client";
import React, { useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { loginUser } from "@/services/authServices";
import { Eye, EyeOff } from "lucide-react";

const LoginPage: React.FC = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState({
		phone: "",
		password: "",
	});
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const router = useRouter();

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setError(null);
		try {
			const res = await loginUser(formData.phone, formData.password);
			const { token, user } = res;

			// Save to cookies
			Cookies.set("token", token, { expires: 7 });
			Cookies.set("role", user.role, { expires: 7 });
			Cookies.set("userId", user.id, { expires: 7 });

			// Redirect based on role
			if (user.role === "admin") {
				router.push("/admin/dashboard");
			} else if (user.role === "agent") {
				router.push("/agent/dashboard");
			} else {
				router.push("/user/dashboard");
			}
		} catch (err: unknown) {
			if (err instanceof Error) {
				console.error("Login error:", err.message);
			} else {
				console.error("Unexpected error:", err);
			}
			setError("ইমেল অথবা পাসওয়ার্ড সঠিক নয়।");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="bg-gray-50 flex items-center justify-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				<div>
					<h2 className="text-center text-3xl font-extrabold text-green-900">
						লগইন করুন
					</h2>
					<p className="mt-2 text-center text-lg text-gray-600">
						আপনার অ্যাকাউন্টে প্রবেশ করতে নিচে আপনার তথ্য দিন
					</p>
				</div>

				<form className="mt-8 space-y-6" onSubmit={handleSubmit}>
					<div className="rounded-md -space-y-px">
						<div>
							<input
								id="phone"
								name="phone"
								type="tel"
								required
								value={formData.phone}
								onChange={handleInputChange}
								className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 sm:text-sm"
								placeholder="আপনার মোবাইল নম্বর দিন"
							/>
						</div>
						<div className="relative mt-3">
							<input
								name="password"
								type={showPassword ? "text" : "password"}
								placeholder="আপনার পাসওয়ার্ডটি লিখুন"
								required
								value={formData.password}
								onChange={handleInputChange}
								className="w-full px-3 py-1.5 border border-gray-300 rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-green-500"
							/>
							<button
								type="button"
								onClick={() => setShowPassword((prev) => !prev)}
								className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
							>
								{showPassword ? (
									<EyeOff className="w-5 h-5" />
								) : (
									<Eye className="w-5 h-5" />
								)}
							</button>
						</div>
					</div>

					{error && <p className="text-red-500 text-sm">{error}</p>}

					<div>
						<button
							type="submit"
							disabled={loading}
							className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
						>
							{loading ? "প্রসেস হচ্ছে..." : "লগইন"}
						</button>
					</div>

					<div className="flex items-center justify-between">
						<Link
							href="/forgot-password"
							className="text-sm text-green-600 hover:text-green-500"
						>
							পাসওয়ার্ড ভুলে গেছেন?
						</Link>
						<Link
							href="/register"
							className="text-sm text-green-600 hover:text-green-500"
						>
							অ্যাকাউন্ট তৈরি করুন
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginPage;
