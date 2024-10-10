import { create } from './model';
import { FETCH_TEACHERS_REQUEST, FETCH_TEACHERS_SUCCESS, FETCH_TEACHERS_FAILURE } from './types';
import { AnyAction } from 'redux';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case FETCH_TEACHERS_REQUEST:
      return { ...state, loading: true };
    case FETCH_TEACHERS_SUCCESS:
      const data = create(action.payload)
      return { ...state, data, loading: false };
    case FETCH_TEACHERS_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export { reducer }