import { FETCH_COURSES_DATA_REQUEST, FETCH_COURSES_DATA_SUCCESS, FETCH_COURSES_DATA_FAILURE } from './types';
import { AnyAction } from 'redux';

const initialState = {
  loading: false,
  error: null,
  data: [],
}

const reducer = (state = { ...initialState }, action: AnyAction) => {
  switch (action.type) {
    case FETCH_COURSES_DATA_REQUEST:
      return { ...state, loading: true };
    case FETCH_COURSES_DATA_SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case FETCH_COURSES_DATA_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export { reducer };