import { defineStore } from 'pinia';

export default defineStore('dashboardUserStore', {
    state: () => ({
        users: [],
    }),

    actions: {
        setUsers(users) {
            this.users = users;
        },

        updateUser(id, user) {
            this.users = this.users.map(u => u.id == id ? user : u);
        },

        addUser(user) {
            this.users.unshift(user);
        },

        deleteUser(id) {
            this.users = this.users.filter(u => u.id != id);
        }
    }
})