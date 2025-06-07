"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import type { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
	const [sidebarOpen, setSidebarOpen] = useState(true);

	return (
		<html lang="en">
			<body className="bg-gray-50 text-gray-900">
				<div className="flex min-h-screen">
					{/* Sidebar */}
					<Sidebar
						isOpen={sidebarOpen}
						toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
					/>

					{/* Main Content */}
					<div className="flex-1 flex flex-col">
						<Navbar
							toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
						/>
						<main className="flex-1 p-4 overflow-y-auto">
							{children}
						</main>
					</div>
				</div>
			</body>
		</html>
	);
}
