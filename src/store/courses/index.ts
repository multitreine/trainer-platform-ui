import { getCockpit } from '@/service/endpoints/cockpit';
import { create } from 'zustand';
import { model } from './model';
import _ from 'lodash';

interface CoursesState {
  courses: any;
  fetchCourses: () => Promise<any>;  
  setCourses: (newCourses: any) => void;
}

export const useCoursesStore = create<CoursesState>((set, get) => ({
  courses: [],

  fetchCourses: async () => {
    const currentCourses = get().courses;

    if (!_.isEmpty(currentCourses)) {
      return;
    }

    try {
      const coursesData = await getCockpit({ params: 'content/items/courses' });
      const courses = model(coursesData)
      set({ courses });
      return courses
    } catch (error) {
      console.error('Erro ao buscar cursos:', error);
      return null;
    }
  },

  setCourses: (newCourses: any) => set(() => ({ courses: newCourses })),
}));
