"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Eye, EyeOff, ChevronDown } from "lucide-react"; // Lucide icons

interface Division {
	id: string;
	bn_name: string;
}
interface District {
	id: string;
	division_id: string;
	bn_name: string;
}
interface Upazila {
	id: string;
	district_id: string;
	bn_name: string;
}

const RegisterPage: React.FC = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		userType: "",
		division: "",
		district: "",
		upazila: "",
		password: "",
	});

	const [error, setError] = useState<string | null>(null);
	const [showPassword, setShowPassword] = useState(false);

	const [divisions, setDivisions] = useState<Division[]>([]);
	const [districts, setDistricts] = useState<District[]>([]);
	const [upazilas, setUpazilas] = useState<Upazila[]>([]);

	const [filteredDistricts, setFilteredDistricts] = useState<District[]>([]);
	const [filteredUpazilas, setFilteredUpazilas] = useState<Upazila[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			const [divRes, distRes, upaRes] = await Promise.all([
				fetch("/data/bd-divisions.json"),
				fetch("/data/bd-districts.json"),
				fetch("/data/bd-upazilas.json"),
			]);

			const [divData, distData, upaData] = await Promise.all([
				divRes.json(),
				distRes.json(),
				upaRes.json(),
			]);

			setDivisions(divData.divisions);
			setDistricts(distData.districts);
			setUpazilas(upaData.upazilas);
		};

		fetchData();
	}, []);

	useEffect(() => {
		setFilteredDistricts(
			districts.filter((d) => d.division_id === formData.division)
		);
		setFormData((prev) => ({ ...prev, district: "", upazila: "" }));
	}, [formData.division, districts]);

	useEffect(() => {
		setFilteredUpazilas(
			upazilas.filter((u) => u.district_id === formData.district)
		);
		setFormData((prev) => ({ ...prev, upazila: "" }));
	}, [formData.district, upazilas]);

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!formData.password || formData.password.length < 6) {
			setError("পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে।");
			return;
		}

		setError(null);
		alert("নিবন্ধন সফল হয়েছে!");
	};

	const renderSelect = (
		name: keyof typeof formData,
		options: { id: string; bn_name: string }[],
		placeholder: string
	) => (
		<div className="relative">
			<select
				name={name}
				required
				value={formData[name]}
				onChange={handleInputChange}
				className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none"
			>
				<option value="">{placeholder}</option>
				{options.map((item) => (
					<option key={item.id} value={item.id}>
						{item.bn_name}
					</option>
				))}
			</select>
			<ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
		</div>
	);

	return (
		<div className="bg-gray-50 flex justify-center py-10 px-4">
			<form
				onSubmit={handleSubmit}
				className="w-full max-w-md bg-white p-6 rounded-md shadow-md space-y-4"
			>
				<h2 className="text-2xl font-bold text-green-700 text-center">
					নিবন্ধন করুন
				</h2>

				<input
					name="name"
					type="text"
					placeholder="আপনার নাম"
					required
					value={formData.name}
					onChange={handleInputChange}
					className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
				/>

				<input
					name="email"
					type="email"
					placeholder="ইমেইল (ঐচ্ছিক)"
					value={formData.email}
					onChange={handleInputChange}
					className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
				/>

				<input
					name="phone"
					type="tel"
					placeholder="আপনার ফোন নম্বর দিন"
					required
					value={formData.phone}
					onChange={handleInputChange}
					className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
				/>

				{renderSelect(
					"userType",
					[
						{ id: "farmer", bn_name: "কৃষক" },
						{ id: "business", bn_name: "ব্যবসায়ী" },
						{ id: "general", bn_name: "সাধারণ" },
						{ id: "agent", bn_name: "এজেন্ট" },
					],
					"ব্যবহারকারী ধরন বেছে নিন"
				)}

				{renderSelect("division", divisions, "বিভাগ বেছে নিন")}
				{renderSelect("district", filteredDistricts, "জেলা বেছে নিন")}
				{renderSelect("upazila", filteredUpazilas, "উপজেলা বেছে নিন")}

				<div className="relative">
					<input
						name="password"
						type={showPassword ? "text" : "password"}
						placeholder="আপনার পাসওয়ার্ডটি দিন"
						required
						value={formData.password}
						onChange={handleInputChange}
						className="w-full px-4 py-2 border border-gray-300 rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-green-500"
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

				{error && <p className="text-red-500 text-sm">{error}</p>}

				<button
					type="submit"
					className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-500"
				>
					নিবন্ধন করুন
				</button>

				<p className="text-center text-sm mt-2">
					<Link
						href="/login"
						className="text-green-600 hover:underline"
					>
						আপনার অ্যাকাউন্ট আছে? লগইন করুন
					</Link>
				</p>
			</form>
		</div>
	);
};

export default RegisterPage;
