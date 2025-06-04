import React from "react";

const PrivacyPolicyPage = () => {
	return (
		<div className="bg-gray-50 py-16 sm:py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				{/* Header Section */}
				<div className="text-center mb-12">
					<h2 className="text-3xl font-semibold text-green-900">
						গোপনীয়তা নীতি
					</h2>
					<p className="mt-4 text-lg text-gray-600">
						আপনার তথ্যের গোপনীয়তা আমাদের জন্য অত্যন্ত গুরুত্বপূর্ণ।
					</p>
				</div>

				{/* Privacy Policy Content */}
				<div className="space-y-8 text-gray-700">
					<section>
						<h3 className="text-2xl font-semibold text-green-800">
							আমরা কীভাবে আপনার তথ্য সংগ্রহ করি
						</h3>
						<p className="mt-4">
							আমরা আপনার ব্যক্তিগত তথ্য বিভিন্ন উপায়ে সংগ্রহ করতে
							পারি, যেমন নিবন্ধন ফর্ম, যোগাযোগ ফর্ম, এবং আপনার
							সাইট ব্যবহারের মাধ্যমে। এটি আপনার নাম, ইমেল ঠিকানা,
							ফোন নম্বর এবং অন্যান্য সম্পর্কিত তথ্য হতে পারে।
						</p>
					</section>

					<section>
						<h3 className="text-2xl font-semibold text-green-800">
							তথ্য ব্যবহারের উদ্দেশ্য
						</h3>
						<p className="mt-4">
							আমরা আপনার তথ্য ব্যবহার করতে পারি আপনার প্রশ্নের
							উত্তর দেওয়ার জন্য, আমাদের পরিষেবা উন্নত করার জন্য,
							এবং আপনার জন্য প্রাসঙ্গিক প্রচার এবং বিজ্ঞাপন প্রেরণ
							করার জন্য।
						</p>
					</section>

					<section>
						<h3 className="text-2xl font-semibold text-green-800">
							তথ্য শেয়ারিং
						</h3>
						<p className="mt-4">
							আমরা আপনার ব্যক্তিগত তথ্য তৃতীয় পক্ষের সাথে শেয়ার
							করি না, সেগুলি কেবল আমাদের পরিষেবা প্রদানকারী অথবা
							আইনগত কারণে প্রয়োজন হলে।
						</p>
					</section>

					<section>
						<h3 className="text-2xl font-semibold text-green-800">
							তথ্য সুরক্ষা
						</h3>
						<p className="mt-4">
							আমরা আপনার তথ্য সুরক্ষিত রাখতে এবং অবাঞ্ছিত প্রবেশের
							হাত থেকে রক্ষা করার জন্য যথাযথ নিরাপত্তা ব্যবস্থা
							গ্রহণ করি।
						</p>
					</section>

					<section>
						<h3 className="text-2xl font-semibold text-green-800">
							আপনার অধিকার
						</h3>
						<p className="mt-4">
							আপনি আপনার তথ্য অ্যাক্সেস, সংশোধন বা মুছে ফেলার
							অধিকার রাখেন। যদি আপনার কোন প্রশ্ন থাকে বা আপনার
							ব্যক্তিগত তথ্য পরিবর্তন করতে চান, আমাদের সাথে
							যোগাযোগ করুন।
						</p>
					</section>
				</div>
			</div>
		</div>
	);
};

export default PrivacyPolicyPage;
