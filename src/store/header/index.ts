import { getCockpitData } from "@/service/cockpit";
import { create } from "zustand";

interface HeaderState {
	data: any;
	loading: boolean;
	error: string | null;
	fetchHeaderData: () => Promise<void>;
	setHeaderData: (newData: any) => void;
}

export const useHeaderStore = create<HeaderState>((set) => ({
	data: [],
	loading: false,
	error: null,

	fetchHeaderData: async () => {
		console.log("Footer BACKEND_URL_DOIS: ", process.env.BACKEND_URL_DOIS);
		console.log("Footer Server: ", process.env.BACKEND_URL);
		console.log("Footer Client: ", process.env.NEXT_PUBLIC_BACKEND_URL);
		set({ loading: true });

		try {
			const headerData = await getCockpitData("content/items/header");
			set({ data: headerData, loading: false });
		} catch (error: any) {
			set({ error: error.message, loading: false });
		}
	},

	setHeaderData: (newData: any) => set({ data: newData }),
}));
