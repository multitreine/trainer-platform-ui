export const FETCH_COURSES_DATA_REQUEST = 'couses/FETCH_COUSES_DATA_REQUEST';
export const FETCH_COURSES_DATA_SUCCESS = 'couses/FETCH_COUSES_DATA_SUCCESS';
export const FETCH_COURSES_DATA_FAILURE = 'couses/FETCH_COUSES_DATA_FAILURE';

export interface CoursesState {
  data: any;
  loading: boolean;
  error: string | null;
}
