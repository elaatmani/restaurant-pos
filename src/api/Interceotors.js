import { useRouter } from 'vue-router';
import authStore from '@/stores/authStore';
import useAlert from '@/composables/useAlert';

export const response = (req) => req;

export const error = (error) => {
    const router = useRouter()
    if(error?.response?.data?.message == 'Unauthenticated.') {
        useAlert('Session Expired!', 'danger')
        authStore().logout();
        router.push({name: 'login'});
    }
    return Promise.reject(error);
}