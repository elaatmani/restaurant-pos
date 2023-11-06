import { defineStore } from 'pinia';
import { NEW_TICKET } from '@/core/ticket';

export default defineStore('ticketStore', {
    state: () => ({
        currentTicket: NEW_TICKET,
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
            this.currentTicket = NEW_TICKET
        }
    }
});