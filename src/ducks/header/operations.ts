
import { AppDispatch } from '@/store/createStore';
import { fetchHeaderDataRequest, fetchHeaderDataSuccess, fetchHeaderDataFailure } from './actions';
import { getCockpit } from '@/service/endpoints/cockpit';

export const fetchHeaderData = (): any => async (dispatch: AppDispatch) => {
  dispatch(fetchHeaderDataRequest());

  try {
    const response = await getCockpit({ params: 'content/items/teste3' });
    dispatch(fetchHeaderDataSuccess(response));
  } catch (error: any) {
    dispatch(fetchHeaderDataFailure(error.message));
  }
};