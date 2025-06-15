import axios, { AxiosInstance } from "axios";
import Cookies from "js-cookie";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const apiClient: AxiosInstance = axios.create({
	baseURL: BASE_URL,
	timeout: 10000,
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
	withCredentials: false,
});

apiClient.interceptors.request.use(
	(config) => {
		const token = Cookies.get("token");
		const role = Cookies.get("role");

		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		if (role) {
			config.headers["X-User-Role"] = role;
		}

		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

apiClient.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response && error.response.status === 401) {
			Cookies.remove("token");
			Cookies.remove("role");
			Cookies.remove("userId");
		}
		return Promise.reject(error);
	}
);

export default apiClient;
