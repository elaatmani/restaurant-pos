import axios from 'axios';
import { backendUrl } from '@/config/app';
import { error, response, request } from './Interceptors';

const createAxiosInstance = (config) => {
  const instance = axios.create({
    baseURL: backendUrl,
    ...config,
  });

  instance.defaults.withCredentials = true;

  return instance;
};

const Api = createAxiosInstance({
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

const ApiForm = createAxiosInstance({
  headers: {
    'Content-Type': 'multipart/form-data',
    Accept: 'application/json',
  },
});

const attachInterceptors = (apiInstance) => {
  apiInstance.interceptors.request.use(request);
  apiInstance.interceptors.response.use(response, error);
};

attachInterceptors(Api);
attachInterceptors(ApiForm);

export { ApiForm };
export default Api;