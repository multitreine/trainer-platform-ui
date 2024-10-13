import { FETCH_FOOTER_REQUEST, FETCH_FOOTER_SUCCESS, FETCH_FOOTER_FAILURE } from './types';
import { AnyAction } from 'redux';

export const fetchFooterDataRequest = (): AnyAction => ({
  type: FETCH_FOOTER_REQUEST,
});

export const fetchFooterDataSuccess = (data: any): AnyAction => ({
  type: FETCH_FOOTER_SUCCESS,
  payload: data,
});

export const fetchFooterDataFailure = (error: string): AnyAction => ({
  type: FETCH_FOOTER_FAILURE,
  payload: error,
});