import { getFromLocalStorage, saveInLocalStorage } from '@/utils/local-storage';
import { defineStore } from 'pinia';
import Cookies from 'js-cookie';

const initialState = {
    isLoggedIn: getFromLocalStorage('isLoggedIn', false),
    user: getFromLocalStorage('user', null),
    isCashRegisterFilled: getFromLocalStorage('isCashRegisterFilled', false),
    currentCashRegister: getFromLocalStorage('currentCashRegister', {}),
    sessionChecked: false
}

export default defineStore('authStore', {
    state: () => initialState,

    actions: {
        setIsLoggedIn(value) {
            this.isLoggedIn = value;
            saveInLocalStorage('isLoggedIn', value);
            this.setIsCashRegisterFilled(false);
        },

        setUser(value, isLoggedIn = null) {
            this.user = value;
            saveInLocalStorage('user', value);

            if(isLoggedIn != null) 
                this.setIsLoggedIn(isLoggedIn);
        },

        logout() {
            this.setUser(null, false);
            this.setIsCashRegisterFilled(false);
            this.setCurrentCashRegister(null);
            deleteAllCookies();
            Cookies.remove('XSRF-TOKEN')
            Cookies.remove('laravel_session')
        },

        setSessionCheck(value) {
            this.sessionChecked = value
        },

        setIsCashRegisterFilled(value) {
            this.isCashRegisterFilled = value;
            saveInLocalStorage('isCashRegisterFilled', value)
        },
        
        setCurrentCashRegister(value) {
            this.currentCashRegister = value;
            saveInLocalStorage('currentCashRegister', value)
        }
    }
});

function deleteAllCookies() {
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}