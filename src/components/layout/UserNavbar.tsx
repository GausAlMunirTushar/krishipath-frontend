"use client";

import { Menu, Bell } from "lucide-react";
import Image from "next/image";

export default function UserNavbar({
	toggleSidebar,
}: {
	toggleSidebar: () => void;
}) {
	return (
		<header className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200">
			<div className="flex items-center gap-2">
				<button className="lg:hidden" onClick={toggleSidebar}>
					<Menu className="w-5 h-5 text-gray-700" />
				</button>
				<span className="font-semibold text-lg text-green-600">
					Dashboard
				</span>
			</div>

			<div className="flex items-center gap-4">
				<button className="relative p-2 rounded-full hover:bg-gray-100">
					<Bell className="w-5 h-5 text-gray-600" />
					<span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
				</button>
				<div className="flex items-center gap-2">
					<Image
						src="/avatar.png"
						alt="User"
						width={32}
						height={32}
						className="rounded-full"
					/>
					<span className="text-sm hidden sm:inline">Tushar</span>
				</div>
			</div>
		</header>
	);
}
