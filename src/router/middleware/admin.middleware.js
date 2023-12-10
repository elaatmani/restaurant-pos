import useAuthStore from "@/stores/authStore";

export default (to) => {
    if(!to.meta?.middleware?.includes('admin')) return true;
    
    const authStore = useAuthStore();

    if(!authStore.user.roles.some(r => r.name == 'admin')) 
        return { name: 'home' };

    return true;
}