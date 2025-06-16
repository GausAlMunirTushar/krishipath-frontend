/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect, useState } from "react";
import { NewsItem } from "@/types/news";
import { toast } from "react-toastify";
import { Trash2, Pencil } from "lucide-react";
import { newsService } from "@/services/newsServices";

const defaultNews: NewsItem = {
	title: "",
	image: "",
	description: "",
	content: "",
	author: "",
	tags: [],
};

const AdminNewsPage = () => {
	const [newsList, setNewsList] = useState<NewsItem[]>([]);
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState<NewsItem>(defaultNews);
	const [imageFile, setImageFile] = useState<File | null>(null);
	const [editingId, setEditingId] = useState<string | null>(null);

	const fetchNews = async () => {
		try {
			setLoading(true);
			const res = await newsService.getAll();
			setNewsList(res);
		} catch (error) {
			toast.error("News fetch failed");
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchNews();
	}, []);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length > 0) {
			setImageFile(e.target.files[0]);
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const payload = new FormData();
		payload.append("title", formData.title);
		payload.append("description", formData.description);
		payload.append("content", formData.content || "");
		payload.append("author", formData.author || "");
		if (imageFile) {
			payload.append("image", imageFile);
		}

		try {
			if (editingId) {
				await newsService.updateFormData(editingId, payload);
				toast.success("News updated");
			} else {
				await newsService.createFormData(payload);
				toast.success("News created");
			}
			setFormData(defaultNews);
			setImageFile(null);
			setEditingId(null);
			fetchNews();
		} catch (error) {
			toast.error("Submit failed");
		}
	};

	const handleEdit = (item: NewsItem) => {
		setFormData(item);
		setEditingId(item._id || null);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const handleDelete = async (id: string) => {
		if (!confirm("Are you sure?")) return;
		try {
			await newsService.remove(id);
			toast.success("News deleted");
			fetchNews();
		} catch (error) {
			toast.error("Delete failed");
		}
	};

	return (
		<div className="max-w-4xl mx-auto py-10 px-4">
			<h2 className="text-2xl font-semibold mb-4">নিউজ ব্যবস্থাপনা</h2>

			<form
				onSubmit={handleSubmit}
				className="space-y-4 mb-8"
				encType="multipart/form-data"
			>
				<input
					type="text"
					name="title"
					placeholder="Title"
					value={formData.title}
					onChange={handleChange}
					className="w-full p-2 border rounded"
				/>
				<input
					type="file"
					name="image"
					accept="image/*"
					onChange={handleImageChange}
					className="w-full p-2 border rounded"
				/>
				<textarea
					name="description"
					placeholder="Description"
					value={formData.description}
					onChange={handleChange}
					className="w-full p-2 border rounded"
				/>
				<textarea
					name="content"
					placeholder="Full Content"
					value={formData.content}
					onChange={handleChange}
					className="w-full p-2 border rounded"
				/>
				<input
					type="text"
					name="author"
					placeholder="Author"
					value={formData.author}
					onChange={handleChange}
					className="w-full p-2 border rounded"
				/>
				<button
					type="submit"
					className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
				>
					{editingId ? "Update" : "Create"}
				</button>
			</form>

			<div className="space-y-4">
				{loading ? (
					<p>লোড হচ্ছে...</p>
				) : newsList.length === 0 ? (
					<p>কোনো নিউজ পাওয়া যায়নি।</p>
				) : (
					newsList.map((news) => (
						<div
							key={news._id}
							className="border p-4 rounded shadow"
						>
							<h3 className="font-semibold text-lg">
								{news.title}
							</h3>
							<p className="text-sm text-gray-600">
								{news.description}
							</p>
							{news.image && (
								<img
									src={news.image}
									alt="News"
									className="w-full max-h-60 object-cover mt-2 rounded"
								/>
							)}
							<div className="flex gap-4 mt-2">
								<button
									onClick={() => handleEdit(news)}
									className="px-3 py-1 border rounded hover:bg-gray-100"
								>
									<Pencil className="w-4 h-4 inline mr-1" />{" "}
									Edit
								</button>
								<button
									onClick={() => handleDelete(news._id!)}
									className="px-3 py-1 border rounded text-red-600 hover:bg-red-50"
								>
									<Trash2 className="w-4 h-4 inline mr-1" />{" "}
									Delete
								</button>
							</div>
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default AdminNewsPage;
