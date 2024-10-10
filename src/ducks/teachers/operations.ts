
import { AppDispatch } from '@/store/createStore';
import {
  fetchTeachersRequest,
  fetchTeachersSuccess,
  fetchTeachersFailure
} from './actions';
import { getCockpit } from '@/service/endpoints/cockpit';

export const fetchTeachersData = (): any => async (dispatch: AppDispatch) => {
  dispatch(fetchTeachersRequest());

  try {
    const teachers = await getCockpit({ params: 'content/items/teachers' });
    dispatch(fetchTeachersSuccess(teachers));
  } catch (error: any) {
    dispatch(fetchTeachersFailure(error.message));
  }
};