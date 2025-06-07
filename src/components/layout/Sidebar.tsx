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
} from "lucide-react";

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

export default function Sidebar() {
	const pathname = usePathname();

	return (
		<aside className="w-64 min-h-screen bg-white border-r hidden lg:block">
			<div className="p-6 flex items-center gap-2 text-green-700 text-xl font-bold">
				<img src="/logo.svg" alt="Logo" className="h-6" /> কৃষি পথ
			</div>
			<nav className="mt-4 space-y-2">
				{menuItems.map(({ name, href, icon: Icon }) => (
					<Link
						key={name}
						href={href}
						className={`flex items-center gap-3 px-6 py-2 rounded-md transition-all
              ${
					pathname === href
						? "bg-green-600 text-white"
						: "text-gray-700 hover:bg-gray-100"
				}`}
					>
						<Icon className="w-5 h-5" />
						{name}
					</Link>
				))}
			</nav>
		</aside>
	);
}
