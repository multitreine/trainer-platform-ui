
import { AppDispatch, makeStore } from '@/store/createStore';
import { fetchHeaderDataRequest, fetchHeaderDataSuccess, fetchHeaderDataFailure } from './actions';
import { getCockpit } from '@/service/endpoints/cockpit';
import _ from 'lodash';
import { selectHeaderData } from './selectors';

export const fetchHeaderData = (): any => async (dispatch: AppDispatch) => {
  dispatch(fetchHeaderDataRequest());

  try {
    const header = await getCockpit({ params: 'content/items/header' });
    return dispatch(fetchHeaderDataSuccess(header));
  } catch (error: any) {
    dispatch(fetchHeaderDataFailure(error.message));
  }
};

export const fetchHeaderIfNeeded = () => async (dispatch: AppDispatch) => {
  const store = makeStore.getState();

  const isEmpty = _.isEmpty(selectHeaderData(store));

  if (isEmpty) {
    return dispatch(fetchHeaderData());
  }else{
    return Promise.resolve();
  }
}