import { create } from './model';
import { FETCH_HERO_REQUEST, FETCH_HERO_SUCCESS, FETCH_HERO_FAILURE } from './types';
import { AnyAction } from 'redux';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case FETCH_HERO_REQUEST:
      return { ...state, loading: true };
    case FETCH_HERO_SUCCESS:
      const data = create(action.payload).filter((item: { isSlideActive: boolean; }) => !item.isSlideActive);
      return { ...state, data, loading: false };
    case FETCH_HERO_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export { reducer }