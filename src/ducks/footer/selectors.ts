

export const selectFooterData = (state: any | any) => state?.footer?.data || [];
export const selectFooterLoading = (state: any | any) => state.footer?.loading ?? false;
export const selectFooterError = (state: any | any) => state.footer?.error ?? null;