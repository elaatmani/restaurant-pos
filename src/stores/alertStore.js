import { defineStore } from 'pinia';

export default defineStore('alertStore', {
    state: () => ({
        active: false,
        alert: {
            type: 'success',
            body: 'Hello body'
        }
    }),

    // getters: {
    //     state: (state) => state
    // },

    actions: {
        toggle(payload){
            this.alert = payload;
            this.active = true;

            setTimeout(() => {
                this.active = false
            }, 4500)

        },
    },

});