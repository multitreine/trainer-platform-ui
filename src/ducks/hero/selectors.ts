

export const selectHeroData = (state: any | any) => state?.hero?.data || [];
export const selectHeroLoading = (state: any | any) => state.Hero?.loading ?? false;
export const selectHeroError = (state: any | any) => state.Hero?.error ?? null;