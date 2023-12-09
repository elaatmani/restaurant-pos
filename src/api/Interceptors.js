import authStore from '@/stores/authStore';
import useAlert from '@/composables/useAlert';
import router from '@/router';
import axios from 'axios';
import { source } from './Api';

export const response = (res) => res;

export const request = config => {
    config.cancelToken = source.token;

    return config;
}

export const error = (error) => {
    
    if(error?.response?.code == 401) {
        useAlert('Session Expired!', 'danger')
        authStore().logout();
        source.cancel('Session Expired');
        router.push({name: 'login'});
    }

    if(axios.isCancel(error)) {
        console.log('cancelled')
        return Promise.reject();
    }
    return Promise.reject(error);
}