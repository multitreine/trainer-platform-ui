import { FETCH_HOME_DATA_REQUEST, FETCH_HOME_DATA_SUCCESS, FETCH_HOME_DATA_FAILURE } from './types';
import { AnyAction } from 'redux';

export const fetchHomeDataRequest = (): AnyAction => ({
  type: FETCH_HOME_DATA_REQUEST,
});

export const fetchHomeDataSuccess = (data: any): AnyAction => ({
  type: FETCH_HOME_DATA_SUCCESS,
  payload: data,
});

export const fetchHomeDataFailure = (error: string): AnyAction => ({
  type: FETCH_HOME_DATA_FAILURE,
  payload: error,
});