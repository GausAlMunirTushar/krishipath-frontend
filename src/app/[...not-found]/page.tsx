"use client";
import { useRouter } from "next/navigation";

const NotFoundPage: React.FC = () => {
	const router = useRouter();

	const goHome = () => {
		router.push("/");
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-50 py-16 sm:py-24 lg:py-32">
			<div className="text-center max-w-lg px-6">
				{/* Main Message */}
				<h1 className="text-9xl font-extrabold text-red-600">404</h1>
				<p className="mt-4 text-xl text-gray-700">
					আমরা খুঁজে পাইনি এই পেজটি!
				</p>
				<p className="mt-2 text-lg text-gray-500">
					দুঃখিত, আপনি যে পেজটি খুঁজছেন তা পাওয়া যায়নি।
				</p>

				{/* Action Buttons */}
				<div className="mt-8">
					<button
						onClick={goHome}
						className="px-4 py-3 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
					>
						হোম পেজে ফিরে যান
					</button>
				</div>
			</div>
		</div>
	);
};

export default NotFoundPage;
