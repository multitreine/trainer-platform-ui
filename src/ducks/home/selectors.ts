import { RootState } from "@/store/createStore";

export const selectHomeData = (state: RootState | any) => state?.home?.data;
export const selectHomeLoading = (state: RootState | any) => state?.home?.loading;
export const selectHomeError = (state: RootState | any) => state?.home?.error;