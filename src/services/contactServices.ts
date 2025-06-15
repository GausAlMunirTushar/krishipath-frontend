/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const submitContactForm = async (data: {
	name: string;
	email: string;
	message: string;
}) => {
	try {
		const response = await axios.post(`${API_URL}/contacts`, data);
		return response.data;
	} catch (error: any) {
		throw new Error(
			error?.response?.data?.message || "Failed to send message"
		);
	}
};

export const getAllContacts = async () => {
	const res = await axios.get(`${API_URL}/contacts`);
	return res.data;
};

export const deleteContact = async (id: string) => {
	const res = await axios.delete(`${API_URL}/contacts/${id}`);
	return res.data;
};

export const updateContact = async (id: string, data: any) => {
	const res = await axios.put(`${API_URL}/contacts/${id}`, data);
	return res.data;
};
