import { getCockpit } from '@/service/endpoints/cockpit';
import { create } from 'zustand';
import { create as createHero } from './model'; // Função create do model.ts

interface HeroState {
  data: any;
  loading: boolean;
  error: string | null;
  fetchHero: () => Promise<void>;
  setHeroData: (newData: any) => void;
}

export const useHeroStore = create<HeroState>((set) => ({
  data: [],
  loading: false,
  error: null,

  fetchHero: async () => {
    set({ loading: true });

    try {
      const heroData = await getCockpit({ params: 'content/items/hero' });
      const filteredData = createHero(heroData).filter((item: { isSlideActive: boolean }) => item.isSlideActive);
      set({ data: filteredData, loading: false });
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },

  setHeroData: (newData: any) => set({ data: newData }),
}));
