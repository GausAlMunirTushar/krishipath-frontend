import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
	return (
		<header className="bg-white shadow-md">
			<div className="max-w-screen-xl mx-auto p-4 flex justify-between items-center">
				{/* Logo and Brand Name */}
				<div className="flex items-center">
					<Image
						src="/images/logo.svg"
						alt="Logo"
						width={120}
						height={60}
						className="mr-2"
					/>
				</div>

				{/* Menu */}
				<nav className="hidden md:flex space-x-6">
					<Link
						href="/"
						className="text-gray-600 hover:text-green-600"
					>
						হোম
					</Link>
					<Link
						href="/products"
						className="text-gray-600 hover:text-green-600"
					>
						আমাদের প্রকল্প
					</Link>
					<Link
						href="/services"
						className="text-gray-600 hover:text-green-600"
					>
						সেবাসমূহ
					</Link>
					<Link
						href="/about"
						className="text-gray-600 hover:text-green-600"
					>
						আমাদের সম্পর্কে
					</Link>
					<Link
						href="/contact"
						className="text-gray-600 hover:text-green-600"
					>
						যোগাযোগ
					</Link>
				</nav>

				{/* Actions (Save, Download) */}
				<div className="flex space-x-4">
					<button className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600">
						সাপোর্ট করুন
					</button>
					<button className="py-2 px-4 bg-green-100 text-green-700 rounded-md hover:bg-green-200">
						লগইন
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
