/* eslint-disable @typescript-eslint/no-explicit-any */

import apiClient from "@/configs/apiConfig";

export const farmerStoryService = {
	getAll: () => apiClient.get("/stories"),
	approve: (id: string) => apiClient.patch(`/stories/${id}/approve`),
	update: (id: string, data: any) => apiClient.put(`/stories/${id}`, data),
	delete: (id: string) => apiClient.delete(`/stories/${id}`),
	create: (formData: FormData) =>
		apiClient.post("/stories/apply", formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		}),
};
