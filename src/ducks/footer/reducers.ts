import { create } from "./model";
import {
  FETCH_FOOTER_REQUEST,
  FETCH_FOOTER_SUCCESS,
  FETCH_FOOTER_FAILURE,
} from "./types";
import { AnyAction } from "redux";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (state = { ...initialState }, action: AnyAction) => {
  switch (action.type) {
    case FETCH_FOOTER_REQUEST:
      return { ...state, loading: true };
    case FETCH_FOOTER_SUCCESS:
      const data = create(action.payload);
      return { ...state, data, loading: false };
    case FETCH_FOOTER_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export { reducer };
