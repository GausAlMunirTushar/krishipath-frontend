/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useEffect, useState } from "react";
import {
	getAllContacts,
	deleteContact,
	updateContact,
} from "@/services/contactServices";
import { Trash2, Pencil } from "lucide-react";

type Contact = {
	_id: string;
	name: string;
	email: string;
	message: string;
	createdAt: string;
};

const AdminContactPage = () => {
	const [contacts, setContacts] = useState<Contact[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [editMode, setEditMode] = useState<string | null>(null);
	const [editedMessage, setEditedMessage] = useState<string>("");

	useEffect(() => {
		fetchContacts();
	}, []);

	const fetchContacts = async () => {
		try {
			setLoading(true);
			const data = await getAllContacts();
			setContacts(data);
		} catch (error) {
			console.error("Failed to load contacts");
		} finally {
			setLoading(false);
		}
	};

	const handleDelete = async (id: string) => {
		if (confirm("Are you sure you want to delete this contact?")) {
			await deleteContact(id);
			await fetchContacts();
		}
	};

	const handleEdit = (id: string, message: string) => {
		setEditMode(id);
		setEditedMessage(message);
	};

	const handleUpdate = async (id: string) => {
		await updateContact(id, { message: editedMessage });
		setEditMode(null);
		await fetchContacts();
	};

	return (
		<div className="max-w-6xl mx-auto p-6">
			<h1 className="text-2xl font-semibold mb-6">Contact Messages</h1>

			{loading ? (
				<p>Loading...</p>
			) : (
				<div className="overflow-x-auto">
					<table className="min-w-full bg-white border border-gray-300">
						<thead>
							<tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
								<th className="p-3 border-b">Name</th>
								<th className="p-3 border-b">Email</th>
								<th className="p-3 border-b">Message</th>
								<th className="p-3 border-b">Date</th>
								<th className="p-3 border-b">Actions</th>
							</tr>
						</thead>
						<tbody>
							{contacts.map((contact) => (
								<tr
									key={contact._id}
									className="text-sm text-gray-800 hover:bg-gray-50"
								>
									<td className="p-3 border-b">
										{contact.name}
									</td>
									<td className="p-3 border-b">
										{contact.email}
									</td>
									<td className="p-3 border-b">
										{editMode === contact._id ? (
											<textarea
												className="w-full border p-2 rounded"
												value={editedMessage}
												onChange={(e) =>
													setEditedMessage(
														e.target.value
													)
												}
											/>
										) : (
											contact.message
										)}
									</td>
									<td className="p-3 border-b">
										{new Date(
											contact.createdAt
										).toLocaleString()}
									</td>
									<td className="p-3 border-b space-x-2">
										{editMode === contact._id ? (
											<button
												onClick={() =>
													handleUpdate(contact._id)
												}
												className="text-green-600 font-semibold"
											>
												Save
											</button>
										) : (
											<button
												onClick={() =>
													handleEdit(
														contact._id,
														contact.message
													)
												}
												className="text-blue-600"
											>
												<Pencil size={18} />
											</button>
										)}
										<button
											onClick={() =>
												handleDelete(contact._id)
											}
											className="text-red-600"
										>
											<Trash2 size={18} />
										</button>
									</td>
								</tr>
							))}
							{contacts.length === 0 && (
								<tr>
									<td
										colSpan={5}
										className="text-center py-6 text-gray-500"
									>
										No contact messages found.
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
};

export default AdminContactPage;
