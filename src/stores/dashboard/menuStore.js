import { defineStore } from 'pinia';

export default defineStore('dashboardMenuStore', {
    state: () => ({
        isMenusFetched: false,
        menus: [],
        items: []
    }),

    actions: {
        // Menus
        
        setMenus(menus) {
            this.menus = menus;
        },

        setIsMenusFetched(value) {
            this.isMenusFetched = value;
        },

        updateMenu(id, menu) {
            this.menus = this.menus.map(u => u.id == id ? menu : u);
        },

        addMenu(menu) {
            this.menus.unshift(menu);
        },

        deleteMenu(id) {
            this.menus = this.menus.filter(u => u.id != id);
        },

        // Items
        setItems(items) {
            this.items = items;
        },

        deleteItem(id) {
            this.items = this.items.filter(u => u.id != id);
        },

        updateItem(id, item) {
            this.items = this.items.map(u => u.id == id ? item : u);
        },
    }
})