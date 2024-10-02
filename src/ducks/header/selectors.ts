import { RootState } from "@/store/createStore";


export const selectHeaderData = (state: RootState | any) => state?.header?.data;
export const selectHeaderLoading = (state: RootState | any) => state?.header?.loading;
export const selectHeaderError = (state: RootState | any) => state?.header?.error;