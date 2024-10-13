export const FETCH_STRUCTURE_REQUEST = 'home/FETCH_STRUCTURE_REQUEST';
export const FETCH_STRUCTURE_SUCCESS = 'home/FETCH_STRUCTURE_SUCCESS';
export const FETCH_STRUCTURE_FAILURE = 'home/FETCH_STRUCTURE_FAILURE';

export interface StructureState {
  data: any;
  loading: boolean;
  error: string | null;
}

interface FetchStructureRequestAction {
  type: typeof FETCH_STRUCTURE_REQUEST;
}

interface FetchStructureSuccessAction {
  type: typeof FETCH_STRUCTURE_SUCCESS;
  payload: any;
}

interface FetchStructureFailureAction {
  type: typeof FETCH_STRUCTURE_FAILURE;
  payload: string;
}

interface Image {
  path: string;
  title: string;
  mime: string;
  type: string;
  description: string;
  tags: string[];
  size: number;
  colors: string[]; // Se você souber mais sobre os dados de cores, pode ajustar isso
  width: number;
  height: number;
  _hash: string;
  _created: number;
  _modified: number;
  _cby: string;
  altText: string;
  thumbhash: string;
  folder: string;
  _id: string;
}

interface Statistic {
  value: string | number;
  label: string;
}

export interface Structure {
  title: string;
  description: string;
  image: Image;
  statistics: Statistic[];
  _modified: number;
  _mby: string;
  _created: number;
  _state: number;
  _cby: string;
  _id: string;
  ctaText: string;
  ctaAction: string;
}


export type StructureActionTypes =
  | FetchStructureRequestAction
  | FetchStructureSuccessAction
  | FetchStructureFailureAction;