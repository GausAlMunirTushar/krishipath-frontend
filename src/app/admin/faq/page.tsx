"use client";
import React, { useEffect, useState } from "react";
import {
	getFaqs,
	createFaq,
	updateFaq,
	deleteFaq,
} from "@/services/faqService";

type Faq = {
	_id: string;
	question: string;
	answer: string;
};

const AdminFaqPage = () => {
	const [faqs, setFaqs] = useState<Faq[]>([]);
	const [loading, setLoading] = useState(true);
	const [formData, setFormData] = useState({ question: "", answer: "" });
	const [editId, setEditId] = useState<string | null>(null);

	useEffect(() => {
		fetchFaqs();
	}, []);

	const fetchFaqs = async () => {
		setLoading(true);
		try {
			const data = await getFaqs();
			setFaqs(data);
		} catch (err) {
			console.error("Error fetching FAQs", err);
		} finally {
			setLoading(false);
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			if (editId) {
				await updateFaq(editId, formData);
			} else {
				await createFaq(formData);
			}
			setFormData({ question: "", answer: "" });
			setEditId(null);
			fetchFaqs();
		} catch (err) {
			console.error("Submit error", err);
		}
	};

	const handleEdit = (faq: Faq) => {
		setFormData({ question: faq.question, answer: faq.answer });
		setEditId(faq._id);
	};

	const handleDelete = async (id: string) => {
		if (confirm("Are you sure to delete?")) {
			await deleteFaq(id);
			fetchFaqs();
		}
	};

	return (
		<div className="p-2 w-full mx-auto">
			<h2 className="text-2xl font-bold mb-4">FAQ</h2>

			{/* Form */}
			<form
				onSubmit={handleSubmit}
				className="space-y-4 bg-white p-4 rounded shadow"
			>
				<input
					type="text"
					name="question"
					placeholder="Question"
					className="w-full p-2 border rounded"
					value={formData.question}
					onChange={(e) =>
						setFormData({ ...formData, question: e.target.value })
					}
					required
				/>
				<textarea
					name="answer"
					placeholder="Answer"
					className="w-full p-2 border rounded"
					value={formData.answer}
					onChange={(e) =>
						setFormData({ ...formData, answer: e.target.value })
					}
					required
				/>
				<button
					type="submit"
					className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500"
				>
					{editId ? "Update FAQ" : "Add FAQ"}
				</button>
			</form>

			{/* FAQ List */}
			{loading ? (
				<p className="mt-6">Loading...</p>
			) : (
				<ul className="mt-6 space-y-4">
					{faqs.map((faq) => (
						<li
							key={faq._id}
							className="bg-gray-50 p-4 rounded shadow flex justify-between items-start"
						>
							<div>
								<p className="font-semibold">{faq.question}</p>
								<p className="text-sm text-gray-600 mt-1">
									{faq.answer}
								</p>
							</div>
							<div className="flex gap-2">
								<button
									onClick={() => handleEdit(faq)}
									className="text-blue-600 hover:underline"
								>
									Edit
								</button>
								<button
									onClick={() => handleDelete(faq._id)}
									className="text-red-600 hover:underline"
								>
									Delete
								</button>
							</div>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default AdminFaqPage;
