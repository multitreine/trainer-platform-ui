export const FETCH_STRUCTURE_REQUEST = 'home/FETCH_STRUCTURE_REQUEST';
export const FETCH_STRUCTURE_SUCCESS = 'home/FETCH_STRUCTURE_SUCCESS';
export const FETCH_STRUCTURE_FAILURE = 'home/FETCH_STRUCTURE_FAILURE';

export interface StructureState {
  data: any;
  loading: boolean;
  error: string | null;
}

interface FetchStructureRequestAction {
  type: typeof FETCH_STRUCTURE_REQUEST;
}

interface FetchStructureSuccessAction {
  type: typeof FETCH_STRUCTURE_SUCCESS;
  payload: any;
}

interface FetchStructureFailureAction {
  type: typeof FETCH_STRUCTURE_FAILURE;
  payload: string;
}

export type StructureActionTypes =
  | FetchStructureRequestAction
  | FetchStructureSuccessAction
  | FetchStructureFailureAction;