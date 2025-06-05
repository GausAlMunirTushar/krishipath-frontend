import FAQ from "@/pages/web/faq/FAQ";

const FAQPage: React.FC = () => {
	const faqData = [
		{
			question: "কিভাবে একটি অ্যাকাউন্ট তৈরি করতে পারি?",
			answer: "আপনি আমাদের সাইটে নিবন্ধন করতে পারবেন। সাইন আপ ফর্ম পূর্ণ করুন এবং প্রয়োজনীয় তথ্য দিন।",
		},
		{
			question: "কিভাবে পাসওয়ার্ড রিসেট করতে পারি?",
			answer: "আপনি আমাদের পাসওয়ার্ড রিসেট পেজে গিয়ে আপনার ইমেল ঠিকানা দিতে পারবেন এবং আমরা আপনাকে একটি পাসওয়ার্ড রিসেট লিঙ্ক পাঠাবো।",
		},
		{
			question: "আমার অর্ডার কিভাবে ট্র্যাক করব?",
			answer: "অর্ডার ট্র্যাক করতে, আপনাকে আপনার অ্যাকাউন্টে লগইন করতে হবে এবং সেখান থেকে 'অর্ডার ইতিহাস' এ গিয়ে ট্র্যাকিং নম্বর দেখতে হবে।",
		},
		{
			question: "আপনার সাপোর্ট টিম কিভাবে যোগাযোগ করতে পারি?",
			answer: "আপনি আমাদের কাস্টমার সাপোর্ট পেজ থেকে ইমেইল অথবা লাইভ চ্যাটের মাধ্যমে আমাদের সাথে যোগাযোগ করতে পারবেন।",
		},
	];

	return (
		<div className="min-h-screen bg-gray-50 py-16 sm:py-24 lg:py-32">
			<div className="container mx-auto px-6 lg:px-8">
				<h2 className="text-3xl font-semibold text-green-900 text-center">
					সাধারণ জিজ্ঞাসা (FAQ)
				</h2>
				<p className="mt-4 text-lg text-gray-600 text-center">
					আমাদের প্রায়শই জিজ্ঞাসিত প্রশ্নগুলি দেখুন।
				</p>

				{/* FAQ Component */}
				<FAQ faqData={faqData} />
			</div>
		</div>
	);
};

export default FAQPage;
