

export const selectStructureData = (state: any | any) => state?.structure?.data || [];
export const selectStructureLoading = (state: any | any) => state.structure?.loading ?? false;
export const selectStructureError = (state: any | any) => state.structure?.error ?? null;