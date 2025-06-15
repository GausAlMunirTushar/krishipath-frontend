/* eslint-disable @typescript-eslint/no-explicit-any */
import apiClient from "./apiConfig";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const submitContactForm = async (data: {
	name: string;
	email: string;
	message: string;
}) => {
	try {
		const response = await apiClient.post(`${API_URL}/contacts`, data);
		return response.data;
	} catch (error: any) {
		throw new Error(
			error?.response?.data?.message || "Failed to send message"
		);
	}
};

export const getAllContacts = async () => {
	const res = await apiClient.get(`${API_URL}/contacts`);
	return res.data;
};

export const deleteContact = async (id: string) => {
	const res = await apiClient.delete(`${API_URL}/contacts/${id}`);
	return res.data;
};

export const updateContact = async (id: string, data: any) => {
	const res = await apiClient.put(`${API_URL}/contacts/${id}`, data);
	return res.data;
};
