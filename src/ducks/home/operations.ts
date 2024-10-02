
import { AppDispatch } from '@/store/createStore';
import { fetchHomeDataRequest, fetchHomeDataSuccess, fetchHomeDataFailure } from './actions';

export const fetchHomeData = (): any => async (dispatch: AppDispatch) => {
  dispatch(fetchHomeDataRequest());

  try {
    const response = { data: 'Home data' };
    dispatch(fetchHomeDataSuccess(response));
  } catch (error: any) {
    dispatch(fetchHomeDataFailure(error.message));
  }
};