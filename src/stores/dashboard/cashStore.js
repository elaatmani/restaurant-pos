import { defineStore } from 'pinia';

export default defineStore('dashboardCashStore', {
    state: () => ({
        cashRegisters: [],
        cashMovements: [],
    }),

    actions: {
        setCashRegisters(cashRegisters) {
            this.cashRegisters = cashRegisters;
        },
        
        setCashMovements(cashMovements) {
            this.cashMovements = cashMovements;
        }
    }
})