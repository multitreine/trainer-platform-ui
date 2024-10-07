

export const selectCoursesData = (state: any | any) => state.courses?.data || [];
export const selectCoursesLoading = (state: any | any) => state.courses?.loading ?? false;
export const selectCoursesError = (state: any | any) => state.courses?.error ?? null;