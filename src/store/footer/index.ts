import { getCockpitData } from "@/service/cockpit";
import _ from "lodash";
import { create } from "zustand";
import { create as createFooter } from "./model";

interface FooterState {
	data: any;
	loading: boolean;
	error: string | null;
	fetchFooterData: () => Promise<void>;
	setFooterData: (newData: any) => void;
}

export const useFooterStore = create<FooterState>((set, get) => ({
	data: [],
	loading: false,
	error: null,

	fetchFooterData: async () => {
		console.log("Footer BACKEND_URL_DOIS: ", process.env.BACKEND_URL_DOIS);
		console.log("Footer Server: ", process.env.BACKEND_URL);
		console.log("Footer Client: ", process.env.NEXT_PUBLIC_BACKEND_URL);
		const footerData = get().data;

		if (!_.isEmpty(footerData)) {
			console.log("Footer data already exists");
			return Promise.resolve();
		}

		set({ loading: true });

		try {
			const footerData = await getCockpitData("content/items/footer");
			const formattedData = createFooter(footerData);
			set({ data: formattedData, loading: false });
		} catch (error: any) {
			set({ error: error.message, loading: false });
		}
	},

	setFooterData: (newData: any) => set({ data: newData }),
}));
