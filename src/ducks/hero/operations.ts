
import { AppDispatch } from '@/store/createStore';
import { fetchHeroRequest, fetchHeroSuccess, fetchHeroFailure } from './actions';
import { getCockpit } from '@/service/endpoints/cockpit';

export const fetchHeroData = (): any => async (dispatch: AppDispatch) => {
  dispatch(fetchHeroRequest());

  try {
    const hero = await getCockpit({ params: 'content/items/hero' });
    dispatch(fetchHeroSuccess(hero));
  } catch (error: any) {
    dispatch(fetchHeroFailure(error.message));
  }
};