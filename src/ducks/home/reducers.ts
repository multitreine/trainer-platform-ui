import { FETCH_HOME_DATA_REQUEST, FETCH_HOME_DATA_SUCCESS, FETCH_HOME_DATA_FAILURE } from './types';
import { AnyAction } from 'redux';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const homeReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case FETCH_HOME_DATA_REQUEST:
      return { ...state, loading: true };
    case FETCH_HOME_DATA_SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case FETCH_HOME_DATA_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default homeReducer;