

export const selectTeachersData = (state: any | any) => state?.teachers?.data || [];
export const selectTeachersLoading = (state: any | any) => state.teachers?.loading ?? false;
export const selectTeachersError = (state: any | any) => state.teachers?.error ?? null;