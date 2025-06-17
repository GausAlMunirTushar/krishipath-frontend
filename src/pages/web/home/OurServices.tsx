"use client";

import { ShoppingCart, CloudRain, LineChart, Smile } from "lucide-react";
import Link from "next/link";

const services = [
	{ icon: ShoppingCart, title: "কৃষি বাজার", href: "/krishi-bazar" },
	{ icon: CloudRain, title: "লাইভ আবহাওয়া", href: "/weather" },
	{ icon: LineChart, title: "লাইভ বাজারদর", href: "/live-market" },
	{ icon: Smile, title: "কর্মসংস্থান সৃষ্টি", href: "/apply-agent" },
];

const OurServices = () => {
	return (
		<section className="py-16 bg-[#f9fff8] text-center">
			<h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-8">
				আমাদের সেবা
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
				{services.map((service, index) => (
					<Link
						href={service.href}
						key={index}
						className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300 border border-green-100"
					>
						<service.icon className="w-10 h-10 mx-auto text-green-600 mb-4" />
						<Link
							href={service.href}
							className="text-lg font-semibold text-gray-800 hover:underline hover:text-green-500"
						>
							{service.title}
						</Link>
					</Link>
				))}
			</div>
		</section>
	);
};

export default OurServices;
