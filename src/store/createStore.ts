import { legacy_createStore as createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { rootReducer } from './rootReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store: any = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
