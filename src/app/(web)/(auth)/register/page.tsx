"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

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

	// Location data
	const [divisions, setDivisions] = useState<Division[]>([]);
	const [districts, setDistricts] = useState<District[]>([]);
	const [upazilas, setUpazilas] = useState<Upazila[]>([]);

	const [filteredDistricts, setFilteredDistricts] = useState<District[]>([]);
	const [filteredUpazilas, setFilteredUpazilas] = useState<Upazila[]>([]);

	useEffect(() => {
		// Load all location data
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

		// Add more validation if needed
		if (!formData.password || formData.password.length < 6) {
			setError("পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে।");
			return;
		}

		setError(null);
		alert("নিবন্ধন সফল হয়েছে!");
	};

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
					placeholder="নাম"
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
					placeholder="ফোন নম্বর"
					required
					value={formData.phone}
					onChange={handleInputChange}
					className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
				/>

				<select
					name="userType"
					required
					value={formData.userType}
					onChange={handleInputChange}
					className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
				>
					<option value="">ইউজার টাইপ বেছে নিন</option>
					<option value="farmer">কৃষক</option>
					<option value="business">ব্যবসায়ী</option>
					<option value="general">সাধারণ</option>
					<option value="agent">এজেন্ট</option>
				</select>

				<select
					name="division"
					required
					value={formData.division}
					onChange={handleInputChange}
					className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
				>
					<option value="">বিভাগ বেছে নিন</option>
					{divisions.map((d) => (
						<option key={d.id} value={d.id}>
							{d.bn_name}
						</option>
					))}
				</select>

				<select
					name="district"
					required
					value={formData.district}
					onChange={handleInputChange}
					className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
				>
					<option value="">জেলা বেছে নিন</option>
					{filteredDistricts.map((d) => (
						<option key={d.id} value={d.id}>
							{d.bn_name}
						</option>
					))}
				</select>

				<select
					name="upazila"
					required
					value={formData.upazila}
					onChange={handleInputChange}
					className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
				>
					<option value="">উপজেলা বেছে নিন</option>
					{filteredUpazilas.map((u) => (
						<option key={u.id} value={u.id}>
							{u.bn_name}
						</option>
					))}
				</select>

				<input
					name="password"
					type="password"
					placeholder="পাসওয়ার্ড"
					required
					value={formData.password}
					onChange={handleInputChange}
					className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
				/>

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
