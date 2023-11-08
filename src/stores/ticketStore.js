import { defineStore } from 'pinia';
// import { NEW_TICKET } from '@/core/ticket';

export default defineStore('ticketStore', {
    state: () => ({
        currentTicket: {
            items: [],
            client: {},
            table: null,
            type: 1,
            status: 'new'
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
                type: 1,
                status: 'new'
            }
        }
    }
});