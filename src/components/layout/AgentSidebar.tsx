"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
	LayoutDashboard,
	ShoppingBasket,
	ClipboardList,
	UserRound,
	Settings,
	ChevronLeft,
	ChevronRight,
} from "lucide-react";

const menuItems = [
	{ href: "/user/dashboard", name: "ড্যাশবোর্ড", icon: LayoutDashboard },
	{ href: "/user/krishi-bazar", name: "আমার বাজার", icon: ShoppingBasket },
	{ href: "/user/order", name: "অর্ডারসমূহ", icon: ClipboardList },
	{ href: "/user/my-account", name: "আমার প্রোফাইল", icon: UserRound },
	{ href: "/user/settings", name: "সেটিংস", icon: Settings },
];

export default function AgentSidebar({
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
				"bg-white border-r border-gray-200 transition-all duration-300 z-30 lg:relative fixed top-0 left-0 h-full flex flex-col",
				isOpen ? "w-56" : "w-16"
			)}
		>
			<div className="flex items-center justify-between px-4 py-6 border-b shadow-sm border-gray-200">
				{isOpen ? (
					<img src="/images/logo.svg" alt="Logo" className="h-6" />
				) : (
					<img src="/images/icon.svg" alt="Logo" className="h-6" />
				)}
				<button onClick={toggleSidebar}>
					{isOpen ? (
						<ChevronLeft className="w-5 h-5" />
					) : (
						<ChevronRight className="w-5 h-5" />
					)}
				</button>
			</div>

			<nav className="mt-4 space-y-1 px-2">
				{menuItems.map(({ name, href, icon: Icon }) => (
					<Link
						key={name}
						href={href}
						className={cn(
							"flex items-center gap-3 px-4 py-2 rounded-md transition-all text-sm font-medium",
							pathname === href
								? "bg-green-600 text-white"
								: "text-gray-700 hover:bg-gray-100"
						)}
					>
						<Icon className="w-5 h-5" />
						{isOpen && <span className="truncate">{name}</span>}
					</Link>
				))}
			</nav>
		</aside>
	);
}
