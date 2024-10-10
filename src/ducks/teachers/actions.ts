import { AnyAction } from 'redux';
import { FETCH_TEACHERS_REQUEST, FETCH_TEACHERS_SUCCESS, FETCH_TEACHERS_FAILURE } from './types';

export const fetchTeachersRequest = (): AnyAction => ({
  type: FETCH_TEACHERS_REQUEST,
});

export const fetchTeachersSuccess = (data: any): AnyAction => ({
  type: FETCH_TEACHERS_SUCCESS,
  payload: data,
});

export const fetchTeachersFailure = (error: string): AnyAction => ({
  type: FETCH_TEACHERS_FAILURE,
  payload: error,
});