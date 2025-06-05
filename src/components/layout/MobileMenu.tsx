import React from "react";
import { Home, ShoppingCart, Info, Phone, ListFilterPlus } from "lucide-react"; // Import Lucide icons

const MobileMenu: React.FC = () => {
	return (
		<div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg md:hidden">
			<div className="flex justify-around items-center py-3">
				{/* Home Icon with Text */}
				<div className="flex flex-col items-center text-gray-600 hover:text-green-600">
					<Home size={24} />
					<span className="text-xs mt-1">হোম</span>
				</div>

				{/* Shopping Cart Icon with Text */}
				<div className="flex flex-col items-center text-gray-600 hover:text-green-600">
					<ShoppingCart size={24} />
					<span className="text-xs mt-1">পণ্যসমূহ</span>
				</div>

				{/* Service Icon with Text */}
				<div className="flex flex-col items-center text-gray-600 hover:text-green-600">
					<ListFilterPlus size={24} />
					<span className="text-xs mt-1">সেবা</span>
				</div>

				{/* Info Icon with Text */}
				<div className="flex flex-col items-center text-gray-600 hover:text-green-600">
					<Info size={24} />
					<span className="text-xs mt-1">আমাদের সম্পর্কে</span>
				</div>

				{/* Phone Icon with Text */}
				<div className="flex flex-col items-center text-gray-600 hover:text-green-600">
					<Phone size={24} />
					<span className="text-xs mt-1">যোগাযোগ</span>
				</div>
			</div>
		</div>
	);
};

export default MobileMenu;
