import { defineStore } from 'pinia';

export default defineStore('dashboardTableStore', {
    state: () => ({
        isTablesFetched: false,
        tables: [],
    }),

    actions: {
        // tables
        
        setTables(tables) {
            this.tables = tables;
        },

        setIsTablesFetched(value) {
            this.isTablesFetched = value;
        },

        updateTable(id, table) {
            this.tables = this.tables.map(u => u.id == id ? table : u);
        },

        addTable(table) {
            this.tables.unshift(table);
        },

        deleteTable(id) {
            this.tables = this.tables.filter(u => u.id != id);
        },

    }
})