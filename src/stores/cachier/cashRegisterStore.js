import { getFromLocalStorage, saveInLocalStorage } from '@/utils/local-storage';
import { defineStore } from 'pinia';

const initialState = {
    cashRegisters: getFromLocalStorage('cashRegisters', [])
}

export default defineStore('cashRegisterStore', {
    state: () => initialState,

    actions: {
        setCashRegisters(cashRegisters) {
            this.cashRegisters = cashRegisters;
            saveInLocalStorage('cashRegisters', cashRegisters);
        },

        addNewEntry(cashRegister) {
            this.setCashRegisters([cashRegister, ...this.cashRegisters])
        },
    }
})