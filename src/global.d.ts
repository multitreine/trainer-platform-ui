import { compose } from 'redux';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    __PRELOADED_STATE__?: any;
    __REDUX_DEVTOOLS_EXTENSION__?: any;
    hot?: any;
  }
}