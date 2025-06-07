"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	CalendarDays,
	Download,
	FileText,
	LayoutDashboard,
	MessageSquare,
	Notebook,
	Settings,
	Users,
	Video,
	ClipboardList,
	BookOpen,
	ChevronLeft,
	ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
	{ name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
	{ name: "Assignments", href: "/assignments", icon: ClipboardList },
	{ name: "Schedule", href: "/schedule", icon: CalendarDays },
	{ name: "Recordings", href: "/recordings", icon: Video },
	{ name: "Discussions", href: "/discussions", icon: MessageSquare },
	{ name: "Resources", href: "/resources", icon: FileText },
	{ name: "Notes", href: "/notes", icon: Notebook },
	{ name: "Downloads", href: "/downloads", icon: Download },
	{ name: "Classes", href: "/classes", icon: Users },
	{ name: "Courses", href: "/courses", icon: BookOpen },
	{ name: "Settings", href: "/settings", icon: Settings },
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
			<nav className="mt-4 space-y-2">
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
