"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	ChevronLeft,
	ChevronRight,
	LayoutDashboard,
	Box,
	Briefcase,
	ShoppingCart,
	UserCheck,
	BarChart,
	BookOpen,
	PhoneCall,
	Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
	{ name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
	{ name: "Products", href: "/admin/products", icon: Box },
	{ name: "Services", href: "/admin/services", icon: Briefcase },
	{ name: "Order", href: "/admin/order", icon: ShoppingCart },
	{ name: "Agent", href: "/admin/agent", icon: UserCheck },
	{ name: "Live Market", href: "/admin/live-market", icon: BarChart },
	{ name: "Farmer Stories", href: "/admin/farmer-stories", icon: BookOpen },
	{ name: "Contact", href: "/admin/contact", icon: PhoneCall },
	{ name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function Sidebar({
	isOpen,
	toggleSidebar,
}: {
	isOpen: boolean;
	toggleSidebar: () => void;
}) {
	const pathname = usePathname();

	return (
		<aside
			className={cn(
				"bg-white border-r border-gray-300 transition-all duration-300 hidden lg:flex flex-col",
				isOpen ? "w-56" : "w-16"
			)}
		>
			{/* Logo and Toggle */}
			<div className="flex items-center justify-between px-4 py-4 border-b border-gray-300">
				{isOpen ? (
					<img src="/images/logo.svg" alt="Logo" className="h-6" />
				) : (
					<img src="/images/icon.svg" alt="Logo" className="h-6" />
				)}
				<button className="" onClick={toggleSidebar}>
					{isOpen ? (
						<ChevronLeft className="w-5 h-5 text-gray-500" />
					) : (
						<ChevronRight className="w-5 h-5 text-gray-500" />
					)}
				</button>
			</div>

			{/* Navigation */}
			<nav className="mt-4 space-y-2 px-2">
				{menuItems.map(({ name, href, icon: Icon }) => (
					<Link
						key={name}
						href={href}
						className={`flex items-center gap-3 px-4 py-2 rounded-md transition-all text-sm ${
							pathname === href
								? "bg-green-600 text-white"
								: "text-gray-700 hover:bg-gray-100"
						}`}
					>
						<Icon className="w-5 h-5" />
						{isOpen && name}
					</Link>
				))}
			</nav>
		</aside>
	);
}
