"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

interface FAQItem {
	question: string;
	answer: string;
}

const FAQ: React.FC<{ faqData: FAQItem[] }> = ({ faqData }) => {
	return (
		<div className="space-y-4">
			{faqData.map((item, index) => (
				<FAQItemComponent
					key={index}
					question={item.question}
					answer={item.answer}
				/>
			))}
		</div>
	);
};

const FAQItemComponent: React.FC<{ question: string; answer: string }> = ({
	question,
	answer,
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleAnswer = () => setIsOpen(!isOpen);

	return (
		<div className="border-b border-gray-300 pb-4">
			<div className="flex justify-between items-center">
				<button
					onClick={toggleAnswer}
					className="w-full text-left text-lg font-semibold text-green-800 hover:text-green-600 focus:outline-none"
				>
					{question}
				</button>

				{/* Arrow Icon with animation */}
				<motion.div
					initial={{ rotate: 0 }}
					animate={{ rotate: isOpen ? 180 : 0 }}
					transition={{ duration: 0.3 }}
				>
					<ChevronDown
						className={`transform transition-transform duration-300 ${
							isOpen ? "rotate-180" : ""
						}`}
						size={24}
						color="green"
					/>
				</motion.div>
			</div>

			{/* Answer with animation */}
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.3 }}
					className="mt-2 text-gray-700"
				>
					{answer}
				</motion.div>
			)}
		</div>
	);
};

export default FAQ;
