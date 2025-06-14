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

const Weather = () => {
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

	if (loading)
		return (
			<p className="text-center text-gray-500">আবহাওয়া লোড হচ্ছে...</p>
		);
	if (error)
		return <p className="text-center text-red-500">ত্রুটি: {error}</p>;
	if (!weather) return null;

	return (
		<div className="bg-blue-50 p-6 rounded-xl shadow-lg max-w-sm mx-auto text-center">
			<h3 className="text-2xl font-semibold text-blue-800 mb-2">
				আপনার এলাকার আবহাওয়া
			</h3>
			<Image
				src={weather.icon}
				alt={weather.description}
				width={64}
				height={64}
			/>
			<p className="text-xl font-medium text-gray-800">{weather.city}</p>
			<p className="text-lg text-gray-700">{weather.description}</p>
			<p className="text-2xl font-bold text-blue-900">
				{weather.temperature}°C
			</p>
		</div>
	);
};

export default Weather;
