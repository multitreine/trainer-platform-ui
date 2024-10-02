export const FETCH_HEADER_DATA_REQUEST = 'header/FETCH_HEADER_DATA_REQUEST';
export const FETCH_HEADER_DATA_SUCCESS = 'header/FETCH_HEADER_DATA_SUCCESS';
export const FETCH_HEADER_DATA_FAILURE = 'header/FETCH_HEADER_DATA_FAILURE';

export interface HeaderState {
  data: any;
  loading: boolean;
  error: string | null;
}