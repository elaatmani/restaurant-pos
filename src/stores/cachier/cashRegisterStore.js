import { defineStore } from 'pinia';

export default defineStore('cashRegisterStore', {
    state: () => ({
        cashRegisters: [],
    }),

    actions: {
        setCashRegisters(cashRegisters) {
            this.cashRegisters = cashRegisters
        },

        addMovement(cashRegister) {
            this.cashRegisters.push(cashRegister)
        },
    }
})