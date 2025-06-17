"use client";
import { Suspense } from "react";
import dynamic from "next/dynamic";

// Completely disable SSR for this page
const DivisionMapWrapper = dynamic(
	() => import("@/pages/web/live-market/DivisionMapWrapper"),
	{
		ssr: false,
		loading: () => (
			<div className="w-full min-h-screen flex items-center justify-center bg-gray-50">
				<div className="text-center">
					<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
					<p className="text-lg text-green-600">
						পৃষ্ঠা লোড হচ্ছে...
					</p>
				</div>
			</div>
		),
	}
);

export default function ProductMapPage() {
	return (
		<Suspense
			fallback={
				<div className="w-full min-h-screen flex items-center justify-center bg-gray-50">
					<div className="text-center">
						<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
						<p className="text-lg text-green-600">
							পৃষ্ঠা লোড হচ্ছে...
						</p>
					</div>
				</div>
			}
		>
			<DivisionMapWrapper />
		</Suspense>
	);
}
