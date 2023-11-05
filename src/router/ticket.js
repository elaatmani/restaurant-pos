import TicketLayout from '@/layouts/ticket/TicketLayout';

import IndexView from '@/views/ticket/IndexView';

export default [
    {
        name: 'ticket-layout',
        component: TicketLayout,
        path: '/ticket',
        meta: {

        },

        children: [
            {
                name: 'ticket.new',
                path: 'new',
                component: IndexView
            }
        ]
    },
]