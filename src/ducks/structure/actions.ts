import { AnyAction } from 'redux';
import { FETCH_STRUCTURE_REQUEST, FETCH_STRUCTURE_SUCCESS, FETCH_STRUCTURE_FAILURE } from './types';

export const fetchStructureRequest = (): AnyAction => ({
  type: FETCH_STRUCTURE_REQUEST,
});

export const fetchStructureSuccess = (data: any): AnyAction => ({
  type: FETCH_STRUCTURE_SUCCESS,
  payload: data,
});

export const fetchStructureFailure = (error: string): AnyAction => ({
  type: FETCH_STRUCTURE_FAILURE,
  payload: error,
});