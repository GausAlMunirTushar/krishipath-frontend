import apiClient from "@/configs/apiConfig";
import { NewsItem } from "@/types/news";

const API_BASE_URL = "/news";

export const newsService = {
	getAll: async (): Promise<NewsItem[]> => {
		const response = await apiClient.get(API_BASE_URL);
		return response.data;
	},

	getById: async (id: string): Promise<NewsItem> => {
		const response = await apiClient.get(`${API_BASE_URL}/${id}`);
		return response.data;
	},

	create: async (data: NewsItem): Promise<NewsItem> => {
		const response = await apiClient.post(API_BASE_URL, data);
		return response.data;
	},

	createFormData: async (data: FormData): Promise<NewsItem> => {
		const response = await apiClient.post(API_BASE_URL, data, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		return response.data;
	},

	update: async (id: string, data: NewsItem): Promise<NewsItem> => {
		const response = await apiClient.put(`${API_BASE_URL}/${id}`, data);
		return response.data;
	},

	updateFormData: async (id: string, data: FormData): Promise<NewsItem> => {
		const response = await apiClient.put(`${API_BASE_URL}/${id}`, data, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		return response.data;
	},

	remove: async (id: string): Promise<{ message: string }> => {
		const response = await apiClient.delete(`${API_BASE_URL}/${id}`);
		return response.data;
	},
};
