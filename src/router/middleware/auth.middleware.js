import useAuthStore from "@/stores/authStore";

export default (to) => {
        console.log(to)
    if(!to.meta?.middleware?.includes('auth')) return true;
    
    const authStore = useAuthStore();


    if(!authStore.isLoggedIn && ['login'].includes(to.name))
        return true;

    if(!authStore.isLoggedIn) 
        return { name: 'login' };
    console.log('here! ', authStore)

    return true;
}