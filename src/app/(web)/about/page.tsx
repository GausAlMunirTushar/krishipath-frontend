import React from "react";
import Image from "next/image";

const AboutPage: React.FC = () => {
	return (
		<div className="bg-gray-50 py-16 sm:py-24 lg:py-32">
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				{/* Header Section */}
				<div className="text-center mb-12">
					<h2 className="text-3xl font-semibold text-green-900">
						আমাদের সম্পর্কে
					</h2>
					<p className="mt-4 text-lg text-gray-600">
						আমরা কৃষি প্রযুক্তি এবং প্রাকৃতিক সম্পদ ব্যবস্থাপনায়
						ক্রমাগত উন্নয়ন সাধন করছি।
					</p>
				</div>

				{/* Our Mission Section */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					<div className="flex justify-center">
						<Image
							src="/images/our-mission.jpg"
							alt="Our Mission"
							width={500}
							height={350}
							className="rounded-lg shadow-xl"
						/>
					</div>
					<div className="flex flex-col justify-center space-y-6">
						<h3 className="text-2xl font-semibold text-green-800">
							আমাদের লক্ষ্য
						</h3>
						<p className="text-gray-700">
							আমাদের লক্ষ্য হলো কৃষি প্রযুক্তির মাধ্যমে
							বিশ্বব্যাপী খাদ্য নিরাপত্তা বৃদ্ধি করা এবং কৃষকদের
							জীবনমান উন্নত করা। আমরা এটি অর্জন করতে
							প্রতিশ্রুতিবদ্ধ, আমাদের উদ্ভাবনী প্রযুক্তির মাধ্যমে।
							আমাদের টিমের মধ্যে রয়েছে অভিজ্ঞ কৃষিবিদ, প্রযুক্তি
							বিশেষজ্ঞ এবং উদ্যোক্তা যারা একত্রে কাজ করে।
						</p>
					</div>
				</div>

				{/* Our Values Section */}
				<div className="mt-16">
					<h3 className="text-2xl font-semibold text-green-800 text-center">
						আমাদের মূল্যবোধ
					</h3>
					<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="bg-white p-6 rounded-lg shadow-md">
							<h4 className="text-lg font-medium text-green-900">
								পবিত্রতা
							</h4>
							<p className="text-gray-600 mt-4">
								আমরা আমাদের কাজের প্রতি প্রতিশ্রুতিবদ্ধ এবং
								সর্বদা সৎ ও ন্যায়সঙ্গত। আমাদের কাজের প্রতি
								আস্থার ভিত্তি হলো পবিত্রতা।
							</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-md">
							<h4 className="text-lg font-medium text-green-900">
								উদ্ভাবন
							</h4>
							<p className="text-gray-600 mt-4">
								কৃষি প্রযুক্তিতে নতুন নতুন ধারণা এবং উদ্ভাবনী
								সমাধানগুলির মাধ্যমে আমরা আরও উন্নত বিশ্ব গড়তে
								চাই।
							</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-md">
							<h4 className="text-lg font-medium text-green-900">
								টিমওয়ার্ক
							</h4>
							<p className="text-gray-600 mt-4">
								একসঙ্গে কাজ করার মাধ্যমে আমরা বড় কিছু অর্জন করি,
								আমাদের প্রতিটি সদস্যের প্রতিভার উপর বিশ্বাস রেখে
								আমরা এগিয়ে চলি।
							</p>
						</div>
					</div>
				</div>

				{/* Our Team Section */}
				<div className="mt-16">
					<h3 className="text-2xl font-semibold text-green-800 text-center">
						আমাদের টিম
					</h3>
					<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
						<div className="text-center">
							<Image
								src="/images/team1.jpg"
								alt="Team Member"
								width={200}
								height={200}
								className="rounded-full mx-auto mb-4"
							/>
							<h4 className="text-lg font-semibold text-green-900">
								আব্দুল হাই
							</h4>
							<p className="text-gray-600">প্রকল্প ব্যবস্থাপক</p>
						</div>
						<div className="text-center">
							<Image
								src="/images/team2.jpg"
								alt="Team Member"
								width={200}
								height={200}
								className="rounded-full mx-auto mb-4"
							/>
							<h4 className="text-lg font-semibold text-green-900">
								সুমি রহমান
							</h4>
							<p className="text-gray-600">গ্রিনহাউস বিশেষজ্ঞ</p>
						</div>
						<div className="text-center">
							<Image
								src="/images/team3.jpg"
								alt="Team Member"
								width={200}
								height={200}
								className="rounded-full mx-auto mb-4"
							/>
							<h4 className="text-lg font-semibold text-green-900">
								মোহাম্মদ রুবেল
							</h4>
							<p className="text-gray-600">
								ফার্ম প্রযুক্তি বিশেষজ্ঞ
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
