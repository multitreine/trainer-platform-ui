import { getCockpitData } from "@/service/cockpit";
import _ from "lodash";
import { create } from "zustand";
import { model } from "../courses/model";

interface CoursesState {
	details: any;
	fetchCourses: () => Promise<any>;
	setCourses: (newCourses: any) => void;
}

export const useGeneralDetailsStore = create<CoursesState>((set, get) => ({
	details: [],

	fetchCourses: async () => {
		const currentCourses = get().details;

		if (!_.isEmpty(currentCourses)) {
			return;
		}

		try {
			const detailsData = await getCockpitData("content/items/generalDetails");
			const details = model([detailsData[0]]);
			set({ details });
			return details;
		} catch (error) {
			console.error("Erro ao buscar cursos:", error);
			return null;
		}
	},

	setCourses: (newCourses: any) => set(() => ({ details: newCourses })),
}));
