export const FETCH_TEACHERS_REQUEST = 'home/FETCH_TEACHERS_REQUEST';
export const FETCH_TEACHERS_SUCCESS = 'home/FETCH_TEACHERS_SUCCESS';
export const FETCH_TEACHERS_FAILURE = 'home/FETCH_TEACHERS_FAILURE';

export interface TeachersState {
  data: any;
  loading: boolean;
  error: string | null;
}

interface FetchTeachersRequestAction {
  type: typeof FETCH_TEACHERS_REQUEST;
}

interface FetchTeachersSuccessAction {
  type: typeof FETCH_TEACHERS_SUCCESS;
  payload: any;
}

interface FetchTeachersFailureAction {
  type: typeof FETCH_TEACHERS_FAILURE;
  payload: string;
}

export type TeachersActionTypes =
  | FetchTeachersRequestAction
  | FetchTeachersSuccessAction
  | FetchTeachersFailureAction;