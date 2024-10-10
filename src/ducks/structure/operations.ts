
import { AppDispatch } from '@/store/createStore';
import {
  fetchStructureRequest,
  fetchStructureSuccess,
  fetchStructureFailure
} from './actions';
import { getCockpit } from '@/service/endpoints/cockpit';

export const fetchStructureData = (): any => async (dispatch: AppDispatch) => {
  dispatch(fetchStructureRequest());

  try {
    const structure = await getCockpit({ params: 'content/items/structure' });
    dispatch(fetchStructureSuccess(structure));
  } catch (error: any) {
    dispatch(fetchStructureFailure(error.message));
  }
};