import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		domains: [
			"res.cloudinary.com",
			"https://cdn-icons-png.flaticon.com",
			"openweathermap.org",
		],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
				port: "",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
