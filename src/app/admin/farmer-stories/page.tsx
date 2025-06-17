"use client";

import React, { useEffect, useState } from "react";
import { farmerStoryService } from "@/services/farmerStoryService";
import Image from "next/image";

interface Story {
	_id: string;
	name: string;
	address: string;
	message: string;
	imageUrl: string;
	videoUrl?: string;
	isApproved: boolean;
	submittedBy: {
		name: string;
		email: string;
		role: string;
	};
	createdAt: string;
}

const AdminFarmerStoryPage = () => {
	const [stories, setStories] = useState<Story[]>([]);
	const [loading, setLoading] = useState(false);
	const [editingStoryId, setEditingStoryId] = useState<string | null>(null);
	const [editedMessage, setEditedMessage] = useState<string>("");
	const [createForm, setCreateForm] = useState({
		name: "",
		address: "",
		message: "",
		videoUrl: "",
		image: null as File | null,
	});

	const fetchStories = async () => {
		setLoading(true);
		try {
			const res = await farmerStoryService.getAll();
			setStories(res.data);
		} catch (err) {
			console.error("Failed to fetch stories", err);
		} finally {
			setLoading(false);
		}
	};

	const handleApprove = async (id: string) => {
		try {
			await farmerStoryService.approve(id);
			fetchStories();
		} catch (err) {
			console.error("Approval failed", err);
		}
	};

	const handleDelete = async (id: string) => {
		if (!confirm("Are you sure you want to delete this story?")) return;
		try {
			await farmerStoryService.delete(id);
			setStories(stories.filter((story) => story._id !== id));
		} catch (err) {
			console.error("Delete failed", err);
		}
	};

	const handleEdit = (story: Story) => {
		setEditingStoryId(story._id);
		setEditedMessage(story.message);
	};

	const handleUpdate = async (id: string) => {
		try {
			await farmerStoryService.update(id, { message: editedMessage });
			setEditingStoryId(null);
			fetchStories();
		} catch (err) {
			console.error("Update failed", err);
		}
	};

	const handleCreate = async () => {
		try {
			const formData = new FormData();
			formData.append("name", createForm.name);
			formData.append("address", createForm.address);
			formData.append("message", createForm.message);
			formData.append("videoUrl", createForm.videoUrl);
			if (createForm.image) formData.append("image", createForm.image);

			await farmerStoryService.create(formData);
			setCreateForm({
				name: "",
				address: "",
				message: "",
				videoUrl: "",
				image: null,
			});
			fetchStories();
		} catch (err) {
			console.error("Create failed", err);
		}
	};

	useEffect(() => {
		fetchStories();
	}, []);

	return (
		<div className="p-6">
			<h1 className="text-2xl font-bold mb-4">Farmer Stories (Admin)</h1>

			<div className="bg-gray-100 p-4 rounded mb-6">
				<h2 className="text-lg font-semibold mb-2">Submit New Story</h2>
				<input
					type="text"
					placeholder="Name"
					className="border px-3 py-1 mb-2 w-full"
					value={createForm.name}
					onChange={(e) =>
						setCreateForm({ ...createForm, name: e.target.value })
					}
				/>
				<input
					type="text"
					placeholder="Address"
					className="border px-3 py-1 mb-2 w-full"
					value={createForm.address}
					onChange={(e) =>
						setCreateForm({
							...createForm,
							address: e.target.value,
						})
					}
				/>
				<textarea
					placeholder="Message"
					className="border px-3 py-1 mb-2 w-full"
					value={createForm.message}
					onChange={(e) =>
						setCreateForm({
							...createForm,
							message: e.target.value,
						})
					}
				></textarea>
				<input
					type="text"
					placeholder="Video URL"
					className="border px-3 py-1 mb-2 w-full"
					value={createForm.videoUrl}
					onChange={(e) =>
						setCreateForm({
							...createForm,
							videoUrl: e.target.value,
						})
					}
				/>
				<input
					type="file"
					accept="image/*"
					className="mb-2"
					onChange={(e) =>
						setCreateForm({
							...createForm,
							image: e.target.files?.[0] || null,
						})
					}
				/>
				<button
					onClick={handleCreate}
					className="bg-blue-600 text-white px-4 py-2 rounded"
				>
					Submit Story
				</button>
			</div>

			{loading ? (
				<p>Loading...</p>
			) : (
				<div className="space-y-4">
					{stories.map((story) => (
						<div
							key={story._id}
							className="border rounded-lg p-4 shadow-sm bg-white"
						>
							<div className="flex gap-4">
								<Image
									src={story.imageUrl}
									alt={story.name}
									width={120}
									height={120}
									className="rounded"
								/>
								<div className="flex-1">
									<p>
										<strong>Name:</strong> {story.name}
									</p>
									<p>
										<strong>Address:</strong>{" "}
										{story.address}
									</p>
									<p>
										<strong>Submitted by:</strong>{" "}
										{story.submittedBy?.name}
									</p>
									<p>
										<strong>Status:</strong>{" "}
										{story.isApproved
											? "✅ Approved"
											: "❌ Pending"}
									</p>
									<p className="mt-2">
										<strong>Message:</strong>{" "}
										{editingStoryId === story._id ? (
											<textarea
												className="border w-full"
												value={editedMessage}
												onChange={(e) =>
													setEditedMessage(
														e.target.value
													)
												}
											/>
										) : (
											story.message
										)}
									</p>

									{story.videoUrl && (
										<p>
											<strong>Video:</strong>{" "}
											<a
												href={story.videoUrl}
												className="text-blue-500 underline"
											>
												Watch
											</a>
										</p>
									)}

									<div className="mt-2 flex gap-2">
										{!story.isApproved && (
											<button
												onClick={() =>
													handleApprove(story._id)
												}
												className="bg-green-600 text-white px-3 py-1 rounded"
											>
												Approve
											</button>
										)}
										<button
											onClick={() =>
												editingStoryId === story._id
													? handleUpdate(story._id)
													: handleEdit(story)
											}
											className="bg-yellow-600 text-white px-3 py-1 rounded"
										>
											{editingStoryId === story._id
												? "Save"
												: "Edit"}
										</button>
										<button
											onClick={() =>
												handleDelete(story._id)
											}
											className="bg-red-600 text-white px-3 py-1 rounded"
										>
											Delete
										</button>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default AdminFarmerStoryPage;
