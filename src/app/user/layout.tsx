"use client";

import UserNavbar from "@/components/layout/UserNavbar";
import UserSidebar from "@/components/layout/UserSidebar";
import { useState } from "react";
import type { ReactNode } from "react";

export default function UserDashboardLayout({
	children,
}: {
	children: ReactNode;
}) {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<html lang="en">
			<body className="bg-gray-50 text-gray-900">
				<div className="flex min-h-screen flex-col lg:flex-row">
					<UserSidebar
						isOpen={sidebarOpen}
						toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
					/>

					<div className="flex-1 flex flex-col">
						<UserNavbar
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
