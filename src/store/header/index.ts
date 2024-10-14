import { getCockpit } from '@/service/endpoints/cockpit';
import { create } from 'zustand';

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
    set({ loading: true });

    try {
      const headerData = await getCockpit({ params: 'content/items/header' });
      set({ data: headerData, loading: false });
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },

  setHeaderData: (newData: any) => set({ data: newData }),
}));
