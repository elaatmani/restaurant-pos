import { defineStore } from 'pinia';

export default defineStore('ticketStore', {
    state: () => ({
        currentTicket: {
            items: [],
            client: {},
            table: null,
            type: 1,
        },
        tickets: [],
    }),

    actions: {
        setTickets(tickets) {
            this.tickets = tickets
        },
        addTicket(ticket) {
            this.tickets.push(ticket)
        },
        addCurrentTicketItem(item) {
            this.currentTicket.items.push(item)
        },
        setCurrentTicketClient(client) {
            this.currentTicket.client = client
        },
        setCurrentTicketType(type) {
            this.currentTicket.type = type
        },
        setCurrentTicketTable(table) {
            this.currentTicket.table = table
        },

        emptyCurrentTicket() {
            this.currentTicket = {
                items: [],
                client: {},
                table: null,
                type: 1
            }
        }
    }
});