"use client";

import { Bell, Menu, Search } from "lucide-react";
import Image from "next/image";

export default function Navbar({
	toggleSidebar,
}: {
	toggleSidebar: () => void;
}) {
	return (
		<header className="flex items-center justify-between px-4 py-2.5 bg-white border-b border-gray-300">
			<div className="flex items-center gap-3 w-full max-w-sm">
				{/* Mobile sidebar toggle */}
				<button className="lg:hidden" onClick={toggleSidebar}>
					<Menu className="w-5 h-5 text-gray-700" />
				</button>

				{/* Search Box */}
				<div className="relative w-full">
					<div className="absolute left-3 top-2.5 text-gray-400">
						<Search className="w-3.5 h-3.5" />
					</div>
					<input
						type="text"
						placeholder="Search"
						className="w-full pl-10 pr-16 py-1.5 border border-green-600 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-600"
					/>
					<div className="absolute right-3 top-2 flex items-center gap-1 text-sm text-green-600 font-semibold">
						<kbd className="bg-green-100 text-xs border border-green-300 px-1 rounded">
							⌘
						</kbd>
						<span className="text-xs">F</span>
					</div>
				</div>
			</div>

			{/* Right section */}
			<div className="flex items-center gap-4 ml-4">
				<button className="relative p-2 rounded-full hover:bg-gray-100">
					<Bell className="w-5 h-5 text-gray-600" />
					<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
				</button>

				<div className="flex items-center gap-2">
					<Image
						src="/images/avatar.jpg"
						alt="User avatar"
						width={32}
						height={32}
						className="rounded-full"
					/>
					<span className="text-sm font-medium hidden sm:inline">
						Tushar
					</span>
					<svg
						className="w-4 h-4 text-gray-500"
						fill="none"
						stroke="currentColor"
						strokeWidth={2}
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</div>
			</div>
		</header>
	);
}
