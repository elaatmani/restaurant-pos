import { getFromLocalStorage, saveInLocalStorage } from '@/utils/local-storage';
import { defineStore } from 'pinia';

const initialState = {
    isLoggedIn: getFromLocalStorage('isLoggedIn', false),
    user: getFromLocalStorage('user', null),
    isCashRegisterFilled: getFromLocalStorage('isCashRegisterFilled', false),
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
        },

        setSessionCheck(value) {
            this.sessionChecked = value
        },

        setIsCashRegisterFilled(value) {
            this.isCashRegisterFilled = value;
            saveInLocalStorage('isCashRegisterFilled', value)
        }
    }
});