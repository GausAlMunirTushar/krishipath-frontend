import apiClient from "@/configs/apiConfig";

export const loginUser = async (phone: string, password: string) => {
	const response = await apiClient.post(`/auth/login`, {
		phone,
		password,
	});
	return response.data;
};

export const registerUser = async (formData: {
	name: string;
	email?: string;
	phone: string;
	password: string;
	role: string;
	division?: string;
	district?: string;
	upazila?: string;
}) => {
	const response = await apiClient.post(`/auth/register`, formData);
	return response.data;
};
