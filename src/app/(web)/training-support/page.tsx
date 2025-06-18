"use client";

import Image from "next/image";

export default function TrainingSupportPage() {
	return (
		<div className=" bg-gray-50 py-10 px-8">
			<div className="max-w-7xl mx-auto px-8">
				<h1 className="text-3xl md:text-4xl font-bold text-green-700 text-center mb-10">
					প্রশিক্ষণ ও সহায়তা
				</h1>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
					<div>
						<Image
							src="/images/training-session.jpg"
							alt="প্রশিক্ষণ সেশন"
							width={600}
							height={400}
							className="rounded-lg shadow-md object-cover w-full h-full"
						/>
					</div>
					<div>
						<h2 className="text-2xl font-semibold text-green-600 mb-4">
							🌐 ডিজিটাল প্ল্যাটফর্ম ব্যবহার শেখানো
						</h2>
						<p className="text-gray-700 text-lg">
							আমরা কৃষকদের ডিজিটাল প্ল্যাটফর্মের ব্যবহার শেখাতে
							ব্যবস্থা নিয়েছি যাতে তারা সহজেই আমাদের অ্যাপ,
							ওয়েবসাইট ও অন্যান্য টুল ব্যবহার করতে পারেন।
							প্রযুক্তি হোক সকলের হাতের মুঠোয়।
						</p>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
					<div className="md:order-2">
						<Image
							src="/images/support-team.jpg"
							alt="সাপোর্ট প্রতিনিধি"
							width={600}
							height={400}
							className="rounded-lg shadow-md object-cover w-full h-full"
						/>
					</div>
					<div className="md:order-1">
						<h2 className="text-2xl font-semibold text-green-600 mb-4">
							📞 প্রতিনিধিদের সরাসরি সহায়তা
						</h2>
						<p className="text-gray-700 text-lg">
							আমাদের প্রতিটি অঞ্চলে রয়েছে প্রশিক্ষিত প্রতিনিধি
							যারা সরাসরি কৃষক, ব্যবসায়ী ও উদ্যোক্তাদের সহায়তা
							দিয়ে থাকেন। সমস্যা সমাধানে তারা দ্রুত সাড়া দেন।
						</p>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
					<div>
						<Image
							src="/images/seasonal-training.jpg"
							alt="সিজনাল প্রশিক্ষণ"
							width={600}
							height={400}
							className="rounded-lg shadow-md object-cover w-full h-full"
						/>
					</div>
					<div>
						<h2 className="text-2xl font-semibold text-green-600 mb-4">
							📅 সিজনাল প্রশিক্ষণ ও পরামর্শ
						</h2>
						<p className="text-gray-700 text-lg">
							আমরা মৌসুমভিত্তিক প্রশিক্ষণের ব্যবস্থা করে থাকি,
							যেমন: বীজ বপনের কৌশল, ফসল রক্ষা পদ্ধতি, বাজারে
							প্রবেশের কৌশল ইত্যাদি। কৃষকদের সক্ষমতা বাড়াতে এটি
							গুরুত্বপূর্ণ ভূমিকা রাখে।
						</p>
					</div>
				</div>

				{/* Call to Action */}
				<div className="bg-green-100 p-6 rounded-lg text-center mt-12">
					<h3 className="text-xl font-semibold text-green-800 mb-3">
						প্রশিক্ষণে অংশ নিতে চান?
					</h3>
					<p className="text-gray-700 mb-4">
						নিবন্ধন করুন বা আপনার স্থানীয় প্রতিনিধির সাথে যোগাযোগ
						করুন। আপনার উন্নতি আমাদের অগ্রাধিকার।
					</p>
					<button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-medium transition">
						নিবন্ধন করুন
					</button>
				</div>
			</div>
		</div>
	);
}
