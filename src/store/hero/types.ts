export const FETCH_HERO_REQUEST = 'home/FETCH_HERO_REQUEST';
export const FETCH_HERO_SUCCESS = 'home/FETCH_HERO_SUCCESS';
export const FETCH_HERO_FAILURE = 'home/FETCH_HERO_FAILURE';

export interface HeroState {
  data: any;
  loading: boolean;
  error: string | null;
}

interface FetchHeroRequestAction {
  type: typeof FETCH_HERO_REQUEST;
}

interface FetchHeroSuccessAction {
  type: typeof FETCH_HERO_SUCCESS;
  payload: any;
}

interface FetchHeroFailureAction {
  type: typeof FETCH_HERO_FAILURE;
  payload: string;
}

export type HeroActionTypes =
  | FetchHeroRequestAction
  | FetchHeroSuccessAction
  | FetchHeroFailureAction;