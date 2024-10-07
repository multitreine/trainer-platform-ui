
import { AppDispatch } from '@/store/createStore';
import { fetchHeaderDataRequest, fetchHeaderDataSuccess, fetchHeaderDataFailure } from './actions';
import { getCockpit } from '@/service/endpoints/cockpit';

export const fetchHeaderData = (): any => async (dispatch: AppDispatch) => {
  dispatch(fetchHeaderDataRequest());

  try {
    const header = await getCockpit({ params: 'content/items/header' });
    return dispatch(fetchHeaderDataSuccess(header));
  } catch (error: any) {
    dispatch(fetchHeaderDataFailure(error.message));
  }
};