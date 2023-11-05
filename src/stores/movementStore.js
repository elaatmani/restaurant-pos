import { defineStore } from 'pinia';

export default defineStore('movementStore', {
    state: () => ({
        movements: [],
    }),

    actions: {
        setMovements(movements) {
            this.movements = movements
        },

        addMovement(movement) {
            this.movements.push(movement)
        },
    }
})