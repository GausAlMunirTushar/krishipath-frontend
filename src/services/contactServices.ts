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
