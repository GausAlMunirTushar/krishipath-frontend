"use client";

import AgentMobileMenu from "@/components/layout/AgentMobileMenu";
import AgentSidebar from "@/components/layout/AgentSidebar";
import Header from "@/components/layout/Header";
import { useState } from "react";
import type { ReactNode } from "react";

export default function AgentDashboardLayout({
	children,
}: {
	children: ReactNode;
}) {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<html lang="en">
			<body className="bg-gray-50 text-gray-900">
				<div className="flex min-h-screen flex-col lg:flex-row">
					<div className="hidden lg:block">
						<AgentSidebar
							isOpen={sidebarOpen}
							toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
						/>
					</div>

					<div className="flex-1 flex flex-col">
						<Header />
						<main className="flex-1 p-4 overflow-y-auto">
							{children}
						</main>
						<AgentMobileMenu />
					</div>
				</div>
			</body>
		</html>
	);
}
