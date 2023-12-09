import { defineStore } from 'pinia';

export default defineStore('dashboardOrderStore', {
    state: () => ({
        isOrdersFetched: false,
        orders: [],
    }),

    actions: {
        // orders
        
        setOrders(orders) {
            this.orders = orders;
        },

        setIsOrdersFetched(value) {
            this.isOrdersFetched = value;
        },

        updateOrder(id, order) {
            this.orders = this.orders.map(u => u.id == id ? order : u);
        },

        addOrder(order) {
            this.orders.unshift(order);
        },

        deleteOrder(id) {
            this.orders = this.orders.filter(u => u.id != id);
        },

    }
})