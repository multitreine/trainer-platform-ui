import { getCockpit } from '@/service/endpoints/cockpit';
import { create } from 'zustand';
import { create as createStructure } from './model'; // Função create do model.ts

interface StructureState {
  data: any;
  loading: boolean;
  error: string | null;
  fetchStructureData: () => Promise<void>;
  setStructureData: (newData: any) => void;
}

export const useStructureStore = create<StructureState>((set) => ({
  data: [],
  loading: false,
  error: null,

  fetchStructureData: async () => {
    set({ loading: true });

    try {
      const structureData = await getCockpit({ params: 'content/items/structure' });
      const formattedData = createStructure(structureData); // Usando a função create para formatar os dados
      set({ data: formattedData, loading: false });
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },

  setStructureData: (newData: any) => set({ data: newData }),
}));
