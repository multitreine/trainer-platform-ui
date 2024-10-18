"use server";
import axios from "axios";

const axiosCockpitInstance = axios.create({
	baseURL: process.env.COCKPIT_URL || "notFoundCockpitUrl",
	headers: {
		"api-key": process.env.COCKPIT_API_KEY_LP || "notFoundCockpitApiKey",
		'Content-Type': 'application/json',
	},
});

export const getCockpitData = async (
	collection: string,
	query: string | undefined = undefined,
) => {
	const url = `/api/${collection}${query ? `?${query}` : ""}`;
	const { data } = await axiosCockpitInstance.get(url);
	return data;
};
