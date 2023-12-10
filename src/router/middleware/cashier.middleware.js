import useAuthStore from "@/stores/authStore";

export default (to) => {
    if(!to.meta?.middleware?.includes('cashier')) return true;
    
    const authStore = useAuthStore();

    if(!authStore.user.roles.some(r => r.name == 'cashier')) 
        return { name: 'home' };

    return true;
}