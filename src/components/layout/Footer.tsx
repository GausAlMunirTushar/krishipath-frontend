import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Facebook, Instagram, Linkedin, Youtube, Send } from "lucide-react";

const Footer: React.FC = () => {
	return (
		<footer className="bg-[#003D2C] text-white pt-10 pb-8">
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 px-4">
				{/* Left Section */}
				<div className="space-y-4">
					<div className="flex items-center space-x-2">
						<Image
							src="/images/logo-white.svg"
							alt="Krishipath Logo"
							width={120}
							height={60}
							className=""
						/>
					</div>
					<p className="text-gray-400 text-sm">সময় এখন কৃষকের</p>
					<div className="flex space-x-4">
						<Link
							href="https://facebook.com/krishipath"
							className="hover:text-green-400"
						>
							<Facebook size={24} /> {/* Facebook Icon */}
						</Link>
						<Link
							href="https://youtube.com/@krishipathbd"
							className="hover:text-green-400"
						>
							<Youtube size={24} /> {/* YouTube Icon */}
						</Link>
						<Link
							href="https://instagram.com/krishipath"
							className="hover:text-green-400"
						>
							<Instagram size={24} /> {/* Instagram Icon */}
						</Link>
						<Link
							href="https://linkedin.com/company/krishipath"
							className="hover:text-green-400"
						>
							<Linkedin size={24} /> {/* LinkedIn Icon */}
						</Link>
					</div>
				</div>

				{/* Explore Section */}
				<div className="space-y-2">
					<h4 className="font-semibold text-lg">আরও কিছু</h4>
					<ul className="space-y-2 text-gray-400">
						<li>
							<Link href="/live-market">
								<span className="hover:text-green-400">
									সরাসরি বাজার দর
								</span>
							</Link>
						</li>
						<li>
							<Link href="/weather">
								<span className="hover:text-green-400">
									আবহাওয়া সেবা
								</span>
							</Link>
						</li>
						<li>
							<Link href="/apply-agent">
								<span className="hover:text-green-400">
									আমাদের সাথে যুক্ত হন
								</span>
							</Link>
						</li>
						<li>
							<Link href="/contact">
								<span className="hover:text-green-400">
									যোগাযোগ
								</span>
							</Link>
						</li>
					</ul>
				</div>

				{/* News Section */}
				<div className="space-y-2">
					<h4 className="font-semibold text-lg">খবর</h4>
					<ul className="space-y-2 text-gray-400">
						<li>
							<Link href="/news/1">
								<span className="hover:text-green-400">
									খাদ্য উৎপাদন শহরে ফিরিয়ে আনা
								</span>
							</Link>
							<span className="text-sm text-gray-500">
								- জুলাই ৫, ২০২৫
							</span>
						</li>
						<p className="text-xs text-gray-500">
							নিয়মিত খবর পেতে আপনার ইমেইল ঠিকানা দিন
						</p>
						{/* Email Subscription */}
						<div className="flex items-center">
							<input
								type="email"
								placeholder="আপনার ইমেল ঠিকানা"
								className="px-4 py-1 w-full rounded-s-md text-white border border-green-500 focus:outline-none focus:border-green-500"
							/>
							<button className="p-1 bg-green-500 border border-green-500 text-white rounded-e-md hover:bg-green-400">
								<Send className="w-6 h-6 p-1" />
							</button>
						</div>
					</ul>
				</div>

				{/* Contact Section */}
				<div className="space-y-2">
					<h4 className="font-semibold text-lg">যোগাযোগ</h4>
					<p className="text-gray-400">
						<i className="fas fa-phone-alt"></i>{" "}
						<Link href="tel:1234567890">+8801796015069</Link>
					</p>
					<p className="text-gray-400">
						<i className="fas fa-envelope"></i>{" "}
						<Link href="mailto:krishipathbd@gmail.com">
							krishipathbd@gmail.com
						</Link>
					</p>
					<p className="text-gray-400">
						<i className="fas fa-map-marker-alt"></i> বালিয়াডাঙ্গী
						সদর, ঠাকুরগাঁও, রংপুর, বাংলাদেশ
					</p>
				</div>
			</div>

			{/* Footer Bottom */}
			<div className="mt-8 text-center text-gray-400 text-sm">
				<p>
					© সমস্ত কপিরাইট {new Date().getFullYear()} কৃষি পথ |{" "}
					<Link
						href="/terms-and-conditions"
						className="hover:text-green-400"
					>
						শর্তাবলী
					</Link>{" "}
					|{" "}
					<Link
						href="/privacy-policy"
						className="hover:text-green-400"
					>
						গোপনীয়তা নীতি
					</Link>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
