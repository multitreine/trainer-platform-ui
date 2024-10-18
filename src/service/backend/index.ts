import axios from "axios";

export const axiosBackendInstance = axios.create({
	baseURL: process.env.BACKEND_URL || process.env.NEXT_PUBLIC_BACKEND_URL  || "notFoundBackendUrl",
	withCredentials: true,
});
