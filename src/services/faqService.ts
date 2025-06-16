import apiClient from "@/configs/apiConfig";

export const getFaqs = async () => {
	const res = await apiClient.get("/faq");
	return res.data;
};

export const createFaq = async (faq: { question: string; answer: string }) => {
	const res = await apiClient.post("/faq", faq);
	return res.data;
};

export const updateFaq = async (
	id: string,
	faq: { question: string; answer: string }
) => {
	const res = await apiClient.put(`/faq/${id}`, faq);
	return res.data;
};

export const deleteFaq = async (id: string) => {
	const res = await apiClient.delete(`/faq/${id}`);
	return res.data;
};
