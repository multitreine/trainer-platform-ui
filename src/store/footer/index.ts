import { getCockpit } from '@/service/endpoints/cockpit';
import { create } from 'zustand';
import { create as createFooter } from './model'; 

interface FooterState {
  data: any;
  loading: boolean;
  error: string | null;
  fetchFooterData: () => Promise<void>;
  setFooterData: (newData: any) => void;
}

export const useFooterStore = create<FooterState>((set) => ({
  data: [],
  loading: false,
  error: null,

  fetchFooterData: async () => {
    set({ loading: true });

    try {
      const footerData = await getCockpit({ params: 'content/items/footer' });
      const formattedData = createFooter(footerData); 
      set({ data: formattedData, loading: false });
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },

  setFooterData: (newData: any) => set({ data: newData }),
}));
