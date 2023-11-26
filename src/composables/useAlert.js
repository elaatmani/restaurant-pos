import useAlertStore from '@/stores/alertStore';

export default (message, type = 'success') => {
    const store = useAlertStore();
    store.toggle(type, message);
}