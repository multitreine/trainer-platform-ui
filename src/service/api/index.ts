import { getCookie } from '@/helpers/cookies';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

const axiosInstance: AxiosInstance | any = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

interface ApiServiceConfig extends AxiosRequestConfig {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'OPTIONS' | 'HEAD';
  data?: any;
  headers?: Record<string, string>;
}

if (process.env.NODE_ENV === 'development' && typeof window === 'undefined') {
  axiosInstance.interceptors.response.use(
    (response : any) => {
      console.log(`
        requested at ${response.config.url},
        method: ${response.config.method?.toUpperCase()},
        status: ${response.status},
        body: ${response.config.data ? JSON.stringify(response.config.data) : 'N/A'},
        params: ${JSON.stringify(response.config.params || {})},
      `);
      return response;
    },
    (error: any) => {
      console.log(`
        requested at ${error.config.url},
        method: ${error.config.method?.toUpperCase()},
        status: ${error.response ? error.response.status : 'N/A'},
        body: ${error.config.data ? JSON.stringify(error.config.data) : 'N/A'},
        params: ${JSON.stringify(error.config.params || {})},
        reqHeaders: ${JSON.stringify(error.config.headers)},
      `);
      return Promise.reject(error);
    },
  );
}

const apiService = async <T = any>(config: ApiServiceConfig = {}): Promise<AxiosResponse<T>> => {

  const revalidate = { next: { revalidate: 600 } };
  const { method = 'GET', url = '', headers: customHeaders, data, ...restConfig } = config || {};

  const headers = {
    ...customHeaders,
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  };

  try {
    const response = await axiosInstance({
      url,
      method,
      headers,
      data,
      ...revalidate,
      ...restConfig,
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export { apiService };