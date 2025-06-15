"use client";

import React from "react";
import { Home, ShoppingCart, Info, Phone, ListFilterPlus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileMenu: React.FC = () => {
	const pathname = usePathname();

	const links = [
		{ href: "/", label: "হোম", icon: Home },
		{ href: "/products", label: "কৃষি বাজার", icon: ShoppingCart },
		{ href: "/services", label: "সেবা", icon: ListFilterPlus },
		{ href: "/about", label: "আমাদের সম্পর্কে", icon: Info },
		{ href: "/contact", label: "যোগাযোগ", icon: Phone },
	];

	return (
		<div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg md:hidden z-50">
			<div className="flex justify-around items-center py-3">
				{links.map(({ href, label, icon: Icon }) => {
					const isActive = pathname === href;

					return (
						<Link
							key={href}
							href={href}
							className={`flex flex-col items-center text-xs transition-all ${
								isActive
									? "text-green-600 font-semibold"
									: "text-gray-600"
							} hover:text-green-600`}
						>
							<Icon size={24} />
							<span className="mt-1">{label}</span>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default MobileMenu;
