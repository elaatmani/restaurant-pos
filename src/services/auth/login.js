import Login from "@/api/auth/Login";


export const login = (app) => {
    const user = {
        email: app.email,
        password: app.password
    }

    if(!validate(app, user)) return false;

    app.loading = true
    Login.login(user)
    .then(data => success(data, app), error => fails(error, app))
    .finally(() => app.loading = false)
}


const success = ({data}, app) => {
    if(data.status != 200) return false;

    const user = data.result;

    app.$store.dispatch('auth/login', user);
    app.$router.push({name: 'index'});
    console.log('Logged in');
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