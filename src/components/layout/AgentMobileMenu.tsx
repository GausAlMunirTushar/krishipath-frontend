"use client";

import React from "react";
import {
	LayoutDashboard,
	ShoppingBasket,
	ClipboardList,
	UserRound,
	Settings,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AgentMobileMenu: React.FC = () => {
	const pathname = usePathname();

	const links = [
		{
			href: "/agent/dashboard",
			label: "ড্যাশবোর্ড",
			icon: LayoutDashboard,
		},
		{
			href: "/agent/krishi-bazar",
			label: "আমার বাজার",
			icon: ShoppingBasket,
		},
		{ href: "/agent/order", label: "অর্ডারসমূহ", icon: ClipboardList },
		{ href: "/agent/my-account", label: "আমার প্রোফাইল", icon: UserRound },
		{ href: "/agent/settings", label: "সেটিংস", icon: Settings },
	];

	return (
		<div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg lg:hidden z-50">
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

export default AgentMobileMenu;
