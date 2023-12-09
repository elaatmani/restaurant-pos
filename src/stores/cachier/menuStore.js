import { defineStore } from 'pinia';

export default defineStore('dashboardMenuStore', {
    state: () => ({
        isMenusFetched: false,
        menus: [],
    }),

    actions: {
        // Menus
        
        setMenus(menus) {
            this.menus = menus;
        },

        setIsMenusFetched(value) {
            this.isMenusFetched = value;
        },

    }
})