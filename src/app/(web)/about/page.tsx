import React from "react";
import Image from "next/image";
import {
	CheckCircle,
	Store,
	Warehouse,
	TrendingUp,
	Brain,
	ServerCog,
	MapPin,
	Smartphone,
	Handshake,
} from "lucide-react";

const AboutPage: React.FC = () => {
	return (
		<div className="bg-gray-50 py-10 sm:py-20">
			<div className="max-w-7xl mx-auto px-6 lg:px-8">
				{/* Header Section */}
				<div className="text-center mb-12">
					<h2 className="text-3xl font-semibold text-green-900">
						আমাদের সম্পর্কে
					</h2>
					<p className="mt-4 text-lg text-center sm:w-3/4 mx-auto text-gray-600">
						কৃষিপথ  - বালিয়াডাঙ্গী থেকে শুরু হওয়া একটি শিক্ষার্থী
						নিযুক্ত ডিজিটাল কৃষি উদ্যোগ। মূল ফোকাস:
						Krishi Bazar প্ল্যাটফর্ম, যেখানে কৃষক ব্যবসায়ী সরাসরি
						ন্যায্য দামে লেনদেন করতে পারেন এবং বাজারদর রিয়েল টাইমে
						দেখতে পারেন।
					</p>
				</div>

				{/* Our Mission Section */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					<div className="flex justify-center">
						<Image
							src="/images/our-mission.webp"
							alt="Our Mission"
							width={500}
							height={350}
							className="rounded-lg shadow-xl"
						/>
					</div>
					<div className="flex flex-col justify-center space-y-3">
						<h3 className="text-2xl font-semibold text-green-800">
							আমাদের লক্ষ্য
						</h3>
						<div className="text-green-600 flex items-center gap-2">
							<CheckCircle className="w-4 h-4" /> প্রতিটি উপজেলায়
							স্টক হাউস গড়ে তুলে কৃষকের পক্ষে বিপণন সুবিধাজনক
							করা।
						</div>
						<div className="text-green-600 flex items-center gap-2">
							<CheckCircle className="w-4 h-4" /> লাইভ বাজারদর ও
							চাহিদা যোগানের তথ্য দিয়ে কৃষকদের ন্যায্য দাম
							নিশ্চিত করা।
						</div>
						<div className="text-green-600 flex items-center text-wrap gap-2">
							<CheckCircle className="w-4 h-4" />
							<p className="text-wrap">
								নিজস্ব ডেটা সেন্টার ও AI মডেল ব্যবহার করে
								ভবিষ্যৎ দামের পূর্বাভাস (প্রাইস প্রেডিকশন) তৈরি
								করা, যাতে কৃষক আগাম সিদ্ধান্ত নিতে পারেন।
							</p>
						</div>
					</div>
				</div>

				{/* Our Values Section */}
				<div className="mt-16">
					<h3 className="text-2xl font-semibold text-green-800 text-center">
						আমাদের মূল্যবোধ
					</h3>
					<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
						<div className="bg-white p-6 rounded-lg shadow-md">
							<h4 className="text-lg flex items-center gap-3 font-medium text-green-900">
								<CheckCircle className="w-4 h-4" />{" "}
								<span>সততা</span>
							</h4>
							<p className="text-gray-600 mt-2">
								দামের স্বচ্ছতা ও তথ্যের নির্ভুলতা বজায় রেখে
								আমরা একটি বিশ্বাসযোগ্য পরিবেশ গড়ে তুলি।
							</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-md">
							<h4 className="text-lg font-medium flex items-center gap-3 text-green-900">
								<CheckCircle className="w-4 h-4" />{" "}
								<span>উদ্ভাবন</span>
							</h4>
							<p className="text-gray-600 mt-2">
								ঘরোয়া সমাধান ও নিজস্ব AI প্রযুক্তির মাধ্যমে
								কৃষিকে সহজ ও আধুনিক করছি।
							</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-md">
							<h4 className="text-lg font-medium flex items-center gap-3 text-green-900">
								<CheckCircle className="w-4 h-4" />{" "}
								<span>কৃষক কেন্দ্রিকতা</span>
							</h4>
							<p className="text-gray-600 mt-2">
								সব সিদ্ধান্ত গ্রহণে কৃষকের স্বার্থকে সর্বোচ্চ
								অগ্রাধিকার দেওয়া হয়।
							</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-md ">
							<h4 className="text-lg font-medium flex items-center gap-3 text-green-900">
								<CheckCircle className="w-4 h-4" />{" "}
								<span>সহযোগিতা</span>
							</h4>
							<p className="text-gray-600 mt-2">
								স্থানীয় কমিউনিটি ও অংশীদারদের সাথে মিলিতভাবে
								কাজ করে টেকসই উন্নয়ন নিশ্চিত করি।
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
								src="/images/rifat.png"
								alt="মোঃ রিফাত আল মাহামুদ"
								width={200}
								height={200}
								className="rounded-md h-48 w-48 mx-auto mb-4"
							/>
							<h4 className="text-lg font-semibold text-green-900">
								মোঃ রিফাত আল মাহামুদ
							</h4>
							<p className="text-gray-600">প্রকল্প পরিচালক</p>
							<p className="text-sm text-gray-500">
								বালিয়াডাঙ্গী পাইলট মডেল উচ্চ বিদ্যালয়
							</p>
							<p className="text-sm text-gray-500">01581483444</p>
							<p className="text-sm mt-2">
								সামগ্রিক পরিকল্পনা, Krishi Bazar রোডম্যাপ ও
								উপস্থাপনা
							</p>
						</div>
						<div className="text-center">
							<Image
								src="/images/mahin.png"
								alt="মোঃ মুনতাছির মাহিন"
								width={200}
								height={200}
								className="rounded-md h-48 w-48 mx-auto mb-4"
							/>
							<h4 className="text-lg font-semibold text-green-900">
								মোঃ মুনতাছির মাহিন
							</h4>
							<p className="text-gray-600">সহকারী পরিচালক</p>
							<p className="text-sm text-gray-500">
								লাহিড়ী বহুমুখী উচ্চ বিদ্যালয়
							</p>
							<p className="text-sm text-gray-500">01897950236</p>
							<p className="text-sm mt-2">
								ডেটা সংগ্রহ ও বিশ্লেষণ, ফিচার পরিকল্পনা
							</p>
						</div>
						<div className="text-center">
							<Image
								src="/images/tushar.jpg"
								alt="মো: গাউস আল মুনির তুষার"
								width={200}
								height={200}
								className="rounded-md object-cover h-48 w-48 mx-auto mb-4"
							/>
							<h4 className="text-lg font-semibold text-green-900">
								মো: গাউস আল মুনির তুষার
							</h4>
							<p className="text-gray-600">প্রযুক্তি পরিচালক</p>
							<p className="text-sm text-gray-500">কৃষিপথ</p>
							<p className="text-sm text-gray-500">01726814131</p>
							<p className="text-sm mt-2">
								সফটওয়্যার ডেভেলপমেন্ট, প্রযুক্তি পরিকল্পনা
							</p>
						</div>
					</div>
				</div>
				{/* Our Activities & Technology Section */}
				<div className="mt-20">
					<h3 className="text-3xl font-bold text-green-800 text-center">
						আমাদের কার্যক্রম ও প্রযুক্তি
					</h3>
					<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="bg-white p-6 rounded-2xl shadow-md border border-green-100">
							<Store className="text-green-700 w-10 h-10 mb-4" />
							<h4 className="text-xl font-semibold text-green-900">
								Krishi Bazar মার্কেটপ্লেস
							</h4>
							<p className="text-gray-600 mt-2">
								কৃষক ও ব্যবসায়ীর জন্য আলাদা লগইন, দরপত্র ও
								লেনদেন ব্যবস্থা।
							</p>
						</div>
						<div className="bg-white p-6 rounded-2xl shadow-md border border-green-100">
							<Warehouse className="text-green-700 w-10 h-10 mb-4" />
							<h4 className="text-xl font-semibold text-green-900">
								স্টক হাউস (পাইলট)
							</h4>
							<p className="text-gray-600 mt-2">
								খুদ্র কৃষকের জন্য ন্যায্য দাম ও কার্যকর বাজার
								সংযোগ।
							</p>
						</div>
						<div className="bg-white p-6 rounded-2xl shadow-md border border-green-100">
							<TrendingUp className="text-green-700 w-10 h-10 mb-4" />
							<h4 className="text-xl font-semibold text-green-900">
								লাইভ বাজারদর আপডেট
							</h4>
							<p className="text-gray-600 mt-2">
								এজেন্ট ও স্ক্র্যাপার থেকে রিয়েল টাইম দাম সংগ্রহ।
							</p>
						</div>
						<div className="bg-white p-6 rounded-2xl shadow-md border border-green-100">
							<Brain className="text-green-700 w-10 h-10 mb-4" />
							<h4 className="text-xl font-semibold text-green-900">
								AI প্রাইস প্রেডিকশন
							</h4>
							<p className="text-gray-600 mt-2">
								মৌসুমি ট্রেন্ড ও ডেটা বিশ্লেষণ করে ভবিষ্যৎ দর
								অনুমান।
							</p>
						</div>
						<div className="bg-white p-6 rounded-2xl shadow-md border border-green-100">
							<ServerCog className="text-green-700 w-10 h-10 mb-4" />
							<h4 className="text-xl font-semibold text-green-900">
								ডেটা সেন্টার
							</h4>
							<p className="text-gray-600 mt-2">
								মিনি সার্ভার ব্যবহারে সব ডেটা সংরক্ষণ ও মডেল
								ট্রেনিং।
							</p>
						</div>
					</div>
				</div>

				{/* Future Roadmap Section */}
				<div className="mt-20">
					<h3 className="text-3xl font-bold text-green-800 text-center">
						সামনের পথ
					</h3>
					<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="bg-white p-6 rounded-2xl shadow-md border border-green-100">
							<MapPin className="text-green-700 w-10 h-10 mb-4" />
							<h4 className="text-xl font-semibold text-green-900">
								স্টক হাউস বিস্তার
							</h4>
							<p className="text-gray-600 mt-2">
								দেশের অন্যান্য উপজেলায় স্টক হাউস প্রতিষ্ঠা।
							</p>
						</div>
						<div className="bg-white p-6 rounded-2xl shadow-md border border-green-100">
							<Smartphone className="text-green-700 w-10 h-10 mb-4" />
							<h4 className="text-xl font-semibold text-green-900">
								মোবাইল অ্যাপ চালু
							</h4>
							<p className="text-gray-600 mt-2">
								কৃষকের হাতে সরাসরি সেবা পৌঁছাতে স্মার্ট অ্যাপ।
							</p>
						</div>
						<div className="bg-white p-6 rounded-2xl shadow-md border border-green-100">
							<Handshake className="text-green-700 w-10 h-10 mb-4" />
							<h4 className="text-xl font-semibold text-green-900">
								অংশীদারিত্ব
							</h4>
							<p className="text-gray-600 mt-2">
								সরকারি-বেসরকারি যৌথ উদ্যোগে ন্যায্যতা
								নিশ্চিতকরণ।
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
