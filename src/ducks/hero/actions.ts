import { AnyAction } from 'redux';
import { FETCH_HERO_REQUEST, FETCH_HERO_SUCCESS, FETCH_HERO_FAILURE } from './types';

export const fetchHeroRequest = (): AnyAction => ({
  type: FETCH_HERO_REQUEST,
});

export const fetchHeroSuccess = (data: any): AnyAction => ({
  type: FETCH_HERO_SUCCESS,
  payload: data,
});

export const fetchHeroFailure = (error: string): AnyAction => ({
  type: FETCH_HERO_FAILURE,
  payload: error,
});