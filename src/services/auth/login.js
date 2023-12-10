import Login from "@/api/auth/Login";
import useAuthStore from "@/stores/authStore";


export const login = (app) => {
    const user = {
        email: app.email,
        password: app.password
    }

    if(!validate(app, user)) return false;

    app.loading = true
    Login.login(user)
    .then(data => success(data, app))
    .catch(error => fails(error, app))
    .finally(() => app.loading = false)
}


const success = (res, app) => {
    console.log(res)
    const data = res.data;
    if(data.status != 200) return false;
    const authStore = useAuthStore();
    const user = data.result;
    authStore.setUser(user, true);
    if(user.roles?.some(r => r.name == 'cashier')) {
        app.$router.push({name: 'cachier.index'});
    }

    if(user.roles?.some(r => r.name == 'admin')) {
        app.$router.push({name: 'dashboard'});
    }
}


const fails = (error, app) => {
    console.log(error);
    const res = error?.response
    if(res?.status == 422) {
        app.$alert({
            body: 'Email ou mot de passe invalides',
            type: 'warning'
        })
    } else {
        app.$alert({
            body: "quelque chose n'a pas fonctionné",
            type: 'warning'
        })
    }
}


const validate = (app, user) => {

    if(!user.email) {
        app.errors.email = 'Email field is required'
        return false;
    }

    if(!user.password) {
        app.errors.password = 'Password field is required'
        return false;
    }

    return true;
}