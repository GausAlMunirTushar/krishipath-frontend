import React from "react";
import { Home, ShoppingCart, Info, Phone, ListFilterPlus } from "lucide-react"; // Import Lucide icons
import Link from "next/link";

const MobileMenu: React.FC = () => {
	return (
		<div className="fixed bottom-10 left-0 right-0 bg-white shadow-lg md:hidden">
			<div className="flex justify-around items-center py-3">
				{/* Home Icon with Text */}
				<Link
					href="/"
					className="flex flex-col items-center text-gray-600 hover:text-green-600"
				>
					<Home size={24} />
					<span className="text-xs mt-1">হোম</span>
				</Link>

				{/* Shopping Cart Icon with Text */}
				<Link
					href="/products"
					className="flex flex-col items-center text-gray-600 hover:text-green-600"
				>
					<ShoppingCart size={24} />
					<span className="text-xs mt-1">পণ্যসমূহ</span>
				</Link>

				{/* Service Icon with Text */}
				<Link
					href="/services"
					className="flex flex-col items-center text-gray-600 hover:text-green-600"
				>
					<ListFilterPlus size={24} />
					<span className="text-xs mt-1">সেবা</span>
				</Link>

				{/* Info Icon with Text */}
				<Link
					href="/about"
					className="flex flex-col items-center text-gray-600 hover:text-green-600"
				>
					<Info size={24} />
					<span className="text-xs mt-1">আমাদের সম্পর্কে</span>
				</Link>

				{/* Phone Icon with Text */}
				<Link
					href="/contact"
					className="flex flex-col items-center text-gray-600 hover:text-green-600"
				>
					<Phone size={24} />
					<span className="text-xs mt-1">যোগাযোগ</span>
				</Link>
			</div>
		</div>
	);
};

export default MobileMenu;
