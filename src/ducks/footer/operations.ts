
import { AppDispatch, makeStore } from '@/store/createStore';
import { fetchFooterDataRequest, fetchFooterDataSuccess, fetchFooterDataFailure } from './actions';
import { getCockpit } from '@/service/endpoints/cockpit';
import { selectFooterData } from './selectors';
import _ from 'lodash';

export const fetchFooterData = (): any => async (dispatch: AppDispatch) => {
  dispatch(fetchFooterDataRequest());
  try {
    const Footer = await getCockpit({ params: 'content/items/footer' });
    return dispatch(fetchFooterDataSuccess(Footer));
  } catch (error: any) {
    dispatch(fetchFooterDataFailure(error.message));
  }
};

export const fetchFooterIfNeeded = () => async (dispatch: AppDispatch) => {
  const store = makeStore.getState();
  const isEmpty = _.isEmpty(selectFooterData(store));
  if (isEmpty) {
    return dispatch(fetchFooterData());
  } else {
    return Promise.resolve();
  }
};