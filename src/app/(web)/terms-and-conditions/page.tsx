const TermsAndConditionsPage = () => {
	return (
		<div className="bg-gray-50 py-16 sm:py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				{/* Header Section */}
				<div className="text-center mb-12">
					<h2 className="text-3xl font-semibold text-green-900">
						শর্তাবলী এবং নীতি
					</h2>
					<p className="mt-4 text-lg text-gray-600">
						আমাদের পরিষেবা ব্যবহার করার শর্তে আপনি যে নিয়মগুলি মেনে
						চলবেন তা এখানে বিস্তারিত বর্ণনা করা হয়েছে।
					</p>
				</div>

				{/* Terms and Conditions Content */}
				<div className="space-y-8 text-gray-700">
					<section>
						<h3 className="text-2xl font-semibold text-green-800">
							পরিষেবা গ্রহণের শর্তাবলী
						</h3>
						<p className="mt-4">
							আপনি আমাদের পরিষেবা ব্যবহার করার মাধ্যমে এই শর্তাবলী
							সম্মত হন। এই শর্তাবলী সময়মতো আপডেট করা হতে পারে।
							আপনি পরিষেবা ব্যবহার করে আমাদের নীতিমালা এবং
							শর্তাবলী মেনে চলতে সম্মত হন।
						</p>
					</section>

					<section>
						<h3 className="text-2xl font-semibold text-green-800">
							ব্যবহারকারীর দায়িত্ব
						</h3>
						<p className="mt-4">
							আপনি এই পরিষেবাগুলি শুধুমাত্র আইনি উদ্দেশ্যে ব্যবহার
							করতে রাজি আছেন। অবৈধ, অপমানজনক, বা অন্য কোন ক্ষতিকর
							কর্মকাণ্ডের জন্য আমাদের পরিষেবা ব্যবহার করা যাবে না।
						</p>
					</section>

					<section>
						<h3 className="text-2xl font-semibold text-green-800">
							অধিকার এবং মালিকানা
						</h3>
						<p className="mt-4">
							আমাদের পরিষেবাগুলির সব সত্ত্বাধিকার এবং intellectual
							property আমাদের মালিকানাধীন। আপনি পরিষেবা ব্যবহার
							করার মাধ্যমে এই সম্পত্তির প্রতি সম্মান জানাতে সম্মত
							হন।
						</p>
					</section>

					<section>
						<h3 className="text-2xl font-semibold text-green-800">
							বিক্রয় বা স্থানান্তর
						</h3>
						<p className="mt-4">
							আমরা আমাদের পরিষেবা বা কোনো অংশের বিক্রয় বা
							স্থানান্তর করার অধিকার রাখি। তবে আপনার সম্মতি ছাড়া
							এই শর্তাবলী পরিবর্তন করা হবে না।
						</p>
					</section>

					<section>
						<h3 className="text-2xl font-semibold text-green-800">
							নির্দিষ্ট বাধ্যবাধকতা
						</h3>
						<p className="mt-4">
							কিছু ক্ষেত্রে, আমরা আপনার পরিষেবার অ্যাক্সেস সীমিত
							বা বাতিল করতে পারি যদি আপনি শর্তাবলী লঙ্ঘন করেন বা
							অন্য কোন আইনি বাধ্যবাধকতা থাকে।
						</p>
					</section>
				</div>
			</div>
		</div>
	);
};

export default TermsAndConditionsPage;
