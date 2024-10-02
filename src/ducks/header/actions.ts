import { FETCH_HEADER_DATA_REQUEST, FETCH_HEADER_DATA_SUCCESS, FETCH_HEADER_DATA_FAILURE } from './types';
import { AnyAction } from 'redux';

export const fetchHeaderDataRequest = (): AnyAction => ({
  type: FETCH_HEADER_DATA_REQUEST,
});

export const fetchHeaderDataSuccess = (data: any): AnyAction => ({
  type: FETCH_HEADER_DATA_SUCCESS,
  payload: data,
});

export const fetchHeaderDataFailure = (error: string): AnyAction => ({
  type: FETCH_HEADER_DATA_FAILURE,
  payload: error,
});