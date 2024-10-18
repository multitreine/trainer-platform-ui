import { axiosBackendInstance } from ".";

export const login = async (email: string, password: string) => {
	const response = await axiosBackendInstance.post("/auth/login", {
		email,
		password,
	});
	return response.data;
};

export const logout = async () => {
	const response = await axiosBackendInstance.post("/auth/logout");
	return response.data;
};
