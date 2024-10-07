

export const selectHeaderData = (state: any | any) => state.header?.data?.[0] || {};
export const selectHeaderLoading = (state: any | any) => state.header?.loading ?? false;
export const selectHeaderError = (state: any | any) => state.header?.error ?? null;