
import { AppDispatch } from '@/store/createStore';
import { fetchCoursesDataRequest, fetchCoursesDataSuccess, fetchCoursesDataFailure } from './actions';
import { getCockpit } from '@/service/endpoints/cockpit';

export const fetchCoursesData = (): any => async (dispatch: AppDispatch) => {
  dispatch(fetchCoursesDataRequest());

  try {
    const courses = await getCockpit({ params: 'content/items/courses' });
    return dispatch(fetchCoursesDataSuccess(courses));
  } catch (error: any) {
    dispatch(fetchCoursesDataFailure(error.message));
  }
};