import authStore from '@/stores/authStore';
import useAlert from '@/composables/useAlert';
import router from '@/router';
import axios from 'axios';
import { abortController } from './Api';

export const response = (res) => res;

export const request = config => {
    config.signal = abortController.signal;

    return config;
}

export const error = (error) => {
    
    if(error?.response?.status == 401) {
        useAlert('Session Expired!', 'danger')
        authStore().logout();
        abortController.abort('Session Expired');
        router.push({name: 'login'});
    }

    if(axios.isCancel(error)) {
        console.log('cancelled')
        return Promise.reject();
    }
    return Promise.reject(error);
}