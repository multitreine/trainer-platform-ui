import { legacy_createStore as createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { rootReducer } from './rootReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const preloadedState = typeof window !== 'undefined' ?  window.__PRELOADED_STATE__ : undefined;

export const makeStore: any = createStore(
  rootReducer,
  preloadedState,
  composeEnhancers(applyMiddleware(thunk)),
);

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];