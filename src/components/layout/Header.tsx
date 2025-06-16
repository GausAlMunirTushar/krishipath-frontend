"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
	const pathname = usePathname();

	const navItems = [
		{ href: "/", label: "হোম" },
		{ href: "/krishi-bazar", label: "কৃষি বাজার" },
		{ href: "/services", label: "সেবাসমূহ" },
		{ href: "/about", label: "আমাদের সম্পর্কে" },
		{ href: "/contact", label: "যোগাযোগ" },
	];

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
					{navItems.map(({ href, label }) => {
						const isActive = pathname === href;
						return (
							<Link
								key={href}
								href={href}
								className={`text-gray-600 hover:text-green-600 ${
									isActive
										? "text-green-600 font-semibold"
										: ""
								}`}
							>
								{label}
							</Link>
						);
					})}
				</nav>

				{/* Actions (Login) */}
				<div className="flex space-x-4">
					<Link
						href="/login"
						className="py-2 cursor-pointer text-xs sm:text-sm px-2 sm:px-4 bg-green-100 text-green-700 rounded-md hover:bg-green-200"
					>
						লগইন
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
