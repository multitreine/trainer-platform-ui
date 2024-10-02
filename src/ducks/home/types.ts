export const FETCH_HOME_DATA_REQUEST = 'home/FETCH_HOME_DATA_REQUEST';
export const FETCH_HOME_DATA_SUCCESS = 'home/FETCH_HOME_DATA_SUCCESS';
export const FETCH_HOME_DATA_FAILURE = 'home/FETCH_HOME_DATA_FAILURE';

export interface HomeState {
  data: any;
  loading: boolean;
  error: string | null;
}

interface FetchHomeDataRequestAction {
  type: typeof FETCH_HOME_DATA_REQUEST;
}

interface FetchHomeDataSuccessAction {
  type: typeof FETCH_HOME_DATA_SUCCESS;
  payload: any;
}

interface FetchHomeDataFailureAction {
  type: typeof FETCH_HOME_DATA_FAILURE;
  payload: string;
}

export type HomeActionTypes =
  | FetchHomeDataRequestAction
  | FetchHomeDataSuccessAction
  | FetchHomeDataFailureAction;