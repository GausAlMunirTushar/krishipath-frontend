/* eslint-disable @typescript-eslint/no-unused-vars */

import FAQ from "@/pages/web/faq/FAQ";
import apiClient from "@/configs/apiConfig";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "সাধারণ জিজ্ঞাসা | Krishipath",
	description: "প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী",
};

interface FAQItem {
	_id?: string;
	question: string;
	answer: string;
}

const FAQPage = async () => {
	let faqData: FAQItem[] = [];

	try {
		const res = await apiClient.get("/faq");
		faqData = res.data;
	} catch (error) {
		console.error("FAQ fetch failed, using fallback.");
		// fallback static data
		faqData = [
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
	}

	return (
		<div className="min-h-screen bg-gray-50 py-10 sm:py-20">
			<div className="container mx-auto px-6 lg:px-8">
				<h2 className="text-3xl font-semibold text-green-900 text-center">
					সাধারণ জিজ্ঞাসা (FAQ)
				</h2>
				<p className="mt-4 text-lg text-gray-600 text-center">
					আমাদের প্রায়শই জিজ্ঞাসিত প্রশ্নগুলি দেখুন।
				</p>

				<FAQ faqData={faqData} />
			</div>
		</div>
	);
};

export default FAQPage;
