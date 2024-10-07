import { FETCH_COURSES_DATA_REQUEST, FETCH_COURSES_DATA_SUCCESS, FETCH_COURSES_DATA_FAILURE } from './types';
import { AnyAction } from 'redux';

export const fetchCoursesDataRequest = (): AnyAction => ({
  type: FETCH_COURSES_DATA_REQUEST,
});

export const fetchCoursesDataSuccess = (data: any): AnyAction => ({
  type: FETCH_COURSES_DATA_SUCCESS,
  payload: data,
});

export const fetchCoursesDataFailure = (error: string): AnyAction => ({
  type: FETCH_COURSES_DATA_FAILURE,
  payload: error,
});