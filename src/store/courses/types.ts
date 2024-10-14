export const FETCH_COURSES_DATA_REQUEST = 'couses/FETCH_COUSES_DATA_REQUEST';
export const FETCH_COURSES_DATA_SUCCESS = 'couses/FETCH_COUSES_DATA_SUCCESS';
export const FETCH_COURSES_DATA_FAILURE = 'couses/FETCH_COUSES_DATA_FAILURE';

export interface CoursesState {
  data: any;
  loading: boolean;
  error: string | null;
}


interface Image {
  path: string;
  title: string;
  mime: string;
  type: string;
  description: string;
  tags: string[];
  size: number;
  colors: string[];
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

interface Card {
  [x: string]: any;
  title: string;
  description: string;
  image: Image;
  ctaText: string;
  ctaUrl: string;
  slug: string;
}

interface Course {
  card: Card[];
  details: any[];
  startDate: string;
  endDate: string;
  _modified: number;
  _mby: string;
  _created: number;
  _state: number;
  _cby: string;
  _id: string;
}

interface Tab {
  nameTab: string;
  content: string[];
}

interface Tutor {
  title: string;
  specialty: string[];
  description: string;
  imagem: Image;
}

interface Document {
  path: string;
  title: string;
  mime: string;
  type: string;
  description: string;
  tags: string[];
  size: number;
  colors: string[] | null;
  width: number | null;
  height: number | null;
  _hash: string;
  _created: number;
  _modified: number;
  _cby: string;
  folder: string;
  _id: string;
}

interface CourseDetails {
  slug: string;
  title: string;
  subTitle: string;
  image: Image;
  tabs: Tab[];
  tutors: Tutor;
  price: string;
  textPrice: string;
  Documents: Document[];
  time: string;
  hourlyLoad: string;
  date: string;
}


export type { Course, Card, CourseDetails };