import { getCockpit } from '@/service/endpoints/cockpit';
import { create } from 'zustand';
import { model } from './model';
import _ from 'lodash';

interface CoursesState {
  courses: any;
  fetchCourses: () => Promise<any>;  
  loading: boolean;
  setCourses: (newCourses: any) => void;
}

export const useCoursesStore = create<CoursesState>((set, get) => ({
  courses: [],
  loading: false,

  fetchCourses: async () => {
    set({ loading: true });
    const currentCourses = get().courses;

    if (!_.isEmpty(currentCourses)) {
      set({ loading: false });
      return currentCourses;
    }

    try {
      const coursesData = await getCockpit({ params: 'content/items/courses' });
      const courses = model(coursesData);
      set({ courses, loading: false });
      return courses;
    } catch (error) {
      console.error('Erro ao buscar cursos:', error);
      set({ loading: false });
      return null;
    }
  },

  setCourses: (newCourses: any) => set(() => ({ courses: newCourses })),
}));
