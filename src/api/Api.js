import axios from 'axios'
import { backendUrl } from '@/config/app'
import { error, response } from './Interceotors';

const Api = axios.create({
    baseURL: backendUrl,
});

const ApiForm = axios.create({
    baseURL: backendUrl,
});

Api.interceptors.response.use(response, error)
ApiForm.interceptors.response.use(response, error)

ApiForm.defaults.withCredentials = true;
ApiForm.defaults.headers = { 'Content-Type': 'multipart/form-data', 'Accept': 'application/json' };

Api.defaults.withCredentials = true;
Api.defaults.headers = { 'Content-Type': 'application/json', 'Accept': 'application/json' };

export { ApiForm };
export default Api;