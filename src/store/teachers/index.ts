import { getCockpit } from '@/service/endpoints/cockpit';
import { create } from 'zustand';
import { create as createTeachers } from './model'; // Mantemos a função create do model.ts

interface TeachersState {
  data: any;
  loading: boolean;
  error: string | null;
  fetchTeachers: () => Promise<void>;
  setTeachersData: (newData: any) => void;
}

export const useTeachersStore = create<TeachersState>((set) => ({
  data: [],
  loading: false,
  error: null,

  fetchTeachers: async () => {
    set({ loading: true });

    try {
      const teachersData = await getCockpit({ params: 'content/items/teacher' });
      const formattedData = createTeachers(teachersData);
      set({ data: formattedData, loading: false });
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },

  setTeachersData: (newData: any) => set({ data: newData }),
}));
