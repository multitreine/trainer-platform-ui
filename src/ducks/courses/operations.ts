
import { AppDispatch, makeStore } from '@/store/createStore';
import { fetchCoursesDataRequest, fetchCoursesDataSuccess, fetchCoursesDataFailure } from './actions';
import { getCockpit } from '@/service/endpoints/cockpit';
import { selectCoursesData } from './selectors';
import _ from 'lodash';

export const fetchCoursesData = (): any => async (dispatch: AppDispatch) => {
  dispatch(fetchCoursesDataRequest());

  try {
    const courses = await getCockpit({ params: 'content/items/courses' });

    return dispatch(fetchCoursesDataSuccess(courses));
  } catch (error: any) {
    dispatch(fetchCoursesDataFailure(error.message));
  }
};

export const fetchCoursesIfNeeded = () => async (dispatch: AppDispatch) => {
  const store = makeStore.getState();
  const isEmpty = _.isEmpty(selectCoursesData(store));

  if (isEmpty) {
    return dispatch(fetchCoursesData());
  } else {
    return Promise.resolve();
  }
};