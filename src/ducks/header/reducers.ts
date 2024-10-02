import { FETCH_HEADER_DATA_REQUEST, FETCH_HEADER_DATA_SUCCESS, FETCH_HEADER_DATA_FAILURE } from './types';
import { AnyAction } from 'redux';

const initialState = {
  loading: false,
  error: null,
  data: null,
}

const headerReducer = (state = { ...initialState }, action: AnyAction) => {
  switch (action.type) {
    case FETCH_HEADER_DATA_REQUEST:
      return { ...state, loading: true };
    case FETCH_HEADER_DATA_SUCCESS:
      console.log('headerReducer:', action);
      return { ...state, data: action.payload, loading: false };
    case FETCH_HEADER_DATA_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export { headerReducer };