import { defineStore } from 'pinia';

export default defineStore('dashboardCashStore', {
    state: () => ({
        cashRegisters: [],
    }),

    actions: {
        setCashRegisters(cashRegisters) {
            this.cashRegisters = cashRegisters;
        },
    }
})