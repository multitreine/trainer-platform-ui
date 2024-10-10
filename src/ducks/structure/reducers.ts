import { create } from './model';
import { FETCH_STRUCTURE_REQUEST, FETCH_STRUCTURE_SUCCESS, FETCH_STRUCTURE_FAILURE } from './types';
import { AnyAction } from 'redux';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case FETCH_STRUCTURE_REQUEST:
      return { ...state, loading: true };
    case FETCH_STRUCTURE_SUCCESS:
      const data = create(action.payload)
      return { ...state, data, loading: false };
    case FETCH_STRUCTURE_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export { reducer }