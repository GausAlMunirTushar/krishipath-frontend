/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type WeatherData = {
	temperature: number;
	description: string;
	city: string;
	icon: string;
};

const WeatherPage = () => {
	const [weather, setWeather] = useState<WeatherData | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (!navigator.geolocation) {
			setError("লোকেশন সাপোর্ট করা হয়নি");
			setLoading(false);
			return;
		}

		navigator.geolocation.getCurrentPosition(async (position) => {
			const { latitude, longitude } = position.coords;
			try {
				const apiKey = "f5f326bb28d3b745275f72aef07439a0";
				const response = await fetch(
					`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=bn&appid=${apiKey}`
				);
				const data = await response.json();

				if (data.cod !== 200) {
					throw new Error(data.message);
				}

				const weatherInfo: WeatherData = {
					temperature: data.main.temp,
					description: data.weather[0].description,
					city: data.name,
					icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
				};
				setWeather(weatherInfo);
			} catch (err: any) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		});
	}, []);

	return (
		<div className="min-h-screen bg-green-50 flex flex-col items-center justify-center px-4 py-12">
			<div className="bg-white rounded-lg shadow-lg max-w-sm w-full p-8 text-center">
				<h1 className="text-3xl font-bold text-green-800 mb-6">
					আপনার এলাকার আবহাওয়া
				</h1>

				{loading && (
					<p className="text-gray-600 text-lg">
						আবহাওয়া লোড হচ্ছে...
					</p>
				)}

				{error && (
					<p className="text-red-600 font-semibold text-lg">
						ত্রুটি: {error}
					</p>
				)}

				{weather && !loading && !error && (
					<>
						<Image
							src={weather.icon}
							alt={weather.description}
							width={100}
							height={100}
							className="mx-auto mb-4"
						/>
						<p className="text-xl font-semibold text-gray-800 mb-1">
							{weather.city}
						</p>
						<p className="text-lg text-gray-700 mb-2">
							{weather.description}
						</p>
						<p className="text-4xl font-extrabold text-green-700">
							{weather.temperature}°C
						</p>
					</>
				)}
			</div>
		</div>
	);
};

export default WeatherPage;
