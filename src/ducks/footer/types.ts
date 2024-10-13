export const FETCH_FOOTER_REQUEST = 'home/FETCH_FOOTER_REQUEST';
export const FETCH_FOOTER_SUCCESS = 'home/FETCH_FOOTER_SUCCESS';
export const FETCH_FOOTER_FAILURE = 'home/FETCH_FOOTER_FAILURE';

export interface FooterState {
  data: any;
  loading: boolean;
  error: string | null;
}

interface FetchFooterRequestAction {
  type: typeof FETCH_FOOTER_REQUEST;
}

interface FetchFooterSuccessAction {
  type: typeof FETCH_FOOTER_SUCCESS;
  payload: any;
}

interface FetchFooterFailureAction {
  type: typeof FETCH_FOOTER_FAILURE;
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
  colors: string[]; // ou qualquer tipo apropriado para representar as cores
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

interface Link {
  label: string;
  url: string;
}

interface Section {
  title: string;
  links: Link[];
}

interface SocialLink {
  icon: string;
  url: string;
}

interface PaymentMethod {
  [x: string]: any;
  icon: Image;
  url: string;
}

interface Newsletter {
  title: string;
  placeholder: string;
  buttonText: string;
}

export interface Footer {
  newsletter: Newsletter;
  sections: Section[];
  socialLinks: SocialLink[];
  paymentMethods: PaymentMethod[];
  copyright: string;
  textPaymentMethods: string;
  _modified: number;
  _mby: string;
  _created: number;
  _state: number;
  _cby: string;
  _id: string;
}


export type FooterActionTypes =
  | FetchFooterRequestAction
  | FetchFooterSuccessAction
  | FetchFooterFailureAction;