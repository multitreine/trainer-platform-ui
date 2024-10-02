'use server'

import { cookies } from 'next/headers';

interface CookieParams {
  name: string;
  value: string;
  expires?: Date;
  path?: string;
}

const setCookie = async ({ name, value, expires, path }: CookieParams) => {
  const cookieStore = cookies();
  cookieStore.set({
    name: name,
    value: value,
    expires: expires || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 dias por padrão
    path: path || '/', // Se não for fornecido, o path padrão será '/' (acessível por todo o site)
  });
};

const getCookie = (name: string) => {
  const cookieStore = cookies();
  const cookie = cookieStore.get(name);
  return cookie?.value || null;
};

const deleteCookie = (name: string) => {
  const cookieStore = cookies();
  cookieStore.set({
    name: name,
    value: '',
    expires: new Date(0), // Expirando o cookie imediatamente para deletá-lo
    path: '/', // Defina o path se necessário
  });
};

const getAllCookies = () => {
  const cookieStore = cookies();
  const allCookies = cookieStore.getAll();
  const cookieObject: { [key: string]: string } = {};
  for (const cookie of allCookies) {
    cookieObject[cookie.name] = cookie.value;
  }
  return cookieObject;
};

export { setCookie, getCookie, deleteCookie, getAllCookies };
