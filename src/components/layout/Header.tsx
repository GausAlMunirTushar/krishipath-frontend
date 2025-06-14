import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
	return (
		<header className="bg-white shadow-md sticky top-0 z-50">
			<div className="max-w-screen-xl mx-auto px-4 py-2 flex justify-between items-center">
				{/* Logo and Brand Name */}
				<Link href="/" className="flex items-center">
					<Image
						src="/images/logo.svg"
						alt="Logo"
						width={120}
						height={60}
						className="mr-2"
					/>
				</Link>

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
						কৃষি বাজার
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
					{/* <button className="py-2 cursor-pointer text-xs sm:text-sm  px-2 sm:px-4 bg-red-500 text-white rounded-md hover:bg-red-600">
						সাপোর্ট করুন
					</button> */}
					<Link
						href="/login"
						className="py-2 cursor-pointer  text-xs sm:text-sm  px-2 sm:px-4 bg-green-100 text-green-700 rounded-md hover:bg-green-200"
					>
						লগইন
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
