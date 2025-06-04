import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
	return (
		<footer className="bg-[#003D2C] text-white py-12">
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
					<p className="text-gray-400 text-sm">
						এখানে বিভিন্ন ধরনের লোরেম ইপসাম উপলব্ধ আছে, তবে
						বেশিরভাগই ভুক্তভোগী।
					</p>
					<div className="flex space-x-4">
						<Link href="#" className="hover:text-green-400">
							<i className="fab fa-facebook-f"></i>
						</Link>
						<Link href="#" className="hover:text-green-400">
							<i className="fab fa-twitter"></i>
						</Link>
						<Link href="#" className="hover:text-green-400">
							<i className="fab fa-pinterest"></i>
						</Link>
						<Link href="#" className="hover:text-green-400">
							<i className="fab fa-instagram"></i>
						</Link>
					</div>
				</div>

				{/* Explore Section */}
				<div className="space-y-2">
					<h4 className="font-semibold text-lg">এক্সপ্লোর</h4>
					<ul className="space-y-2 text-gray-400">
						<li>
							<Link href="/about">
								<span className="hover:text-green-400">
									আমাদের সম্পর্কে
								</span>
							</Link>
						</li>
						<li>
							<Link href="/services">
								<span className="hover:text-green-400">
									সেবাসমূহ
								</span>
							</Link>
						</li>
						<li>
							<Link href="/projects">
								<span className="hover:text-green-400">
									আমাদের প্রকল্প
								</span>
							</Link>
						</li>
						<li>
							<Link href="/farmers">
								<span className="hover:text-green-400">
									কৃষকরা
								</span>
							</Link>
						</li>
						<li>
							<Link href="/news">
								<span className="hover:text-green-400">
									সাম্প্রতিক খবর
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
								জুলাই ৫, ২০২২
							</span>
						</li>
						<li>
							<Link href="/news/2">
								<span className="hover:text-green-400">
									চাষাবাদের ভবিষ্যত, স্মার্ট সেচ সমাধান
								</span>
							</Link>
							<span className="text-sm text-gray-500">
								জুলাই ৫, ২০২২
							</span>
						</li>
					</ul>
				</div>

				{/* Contact Section */}
				<div className="space-y-4">
					<h4 className="font-semibold text-lg">যোগাযোগ</h4>
					<p className="text-gray-400">
						<i className="fas fa-phone-alt"></i> ৬৬৬ ৮৮৮ ০০০০
					</p>
					<p className="text-gray-400">
						<i className="fas fa-envelope"></i> needhelp@company.com
					</p>
					<p className="text-gray-400">
						<i className="fas fa-map-marker-alt"></i> ৮০ ব্রুকলিন
						গোল্ডেন স্ট্রীট লাইন, নিউইয়র্ক, USA
					</p>

					{/* Email Subscription */}
					<div className="flex items-center space-x-2">
						<input
							type="email"
							placeholder="আপনার ইমেল ঠিকানা"
							className="p-2 w-full rounded-md text-gray-800"
						/>
						<button className="p-2 bg-green-500 text-white rounded-md hover:bg-green-400">
							<i className="fas fa-paper-plane"></i>
						</button>
					</div>
				</div>
			</div>

			{/* Footer Bottom */}
			<div className="mt-8 text-center text-gray-400 text-sm">
				<p>
					© সমস্ত কপিরাইট ২০২৪ কৃষি পথ |{" "}
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
