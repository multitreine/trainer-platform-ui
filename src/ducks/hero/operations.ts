import { AppDispatch, makeStore } from '@/store/createStore';
import { fetchHeroRequest, fetchHeroSuccess, fetchHeroFailure } from './actions';
import { getCockpit } from '@/service/endpoints/cockpit';
import _ from 'lodash';
import { selectHeroData, selectHeroLoading, selectHeroError } from './selectors';

export const fetchHeroData = (): any => async (dispatch: AppDispatch) => {
  dispatch(fetchHeroRequest());

  try {
    const hero = await getCockpit({ params: 'content/items/hero' });
    return dispatch(fetchHeroSuccess(hero));
  } catch (error: any) {
    return dispatch(fetchHeroFailure(error.message));
  }
};

export const fetchHeroIfNeeded = () => async (dispatch: AppDispatch) => {
  const store = makeStore.getState();
  const isEmpty = _.isEmpty(selectHeroData(store));

  if (isEmpty) {
    return dispatch(fetchHeroData());
  } else {
    return Promise.resolve();
  }
};
