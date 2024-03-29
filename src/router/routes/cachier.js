import CachierLayout from '@/layouts/cachier/CachierLayout';

import IndexView from '@/views/cachier/IndexView';
import TicketListView from '@/views/cachier/tickets/TicketListView';

import MovementListView from '@/views/cachier/movements/MovementListView';
import MovementCreateView from '@/views/cachier/movements/MovementCreateView';

import CashRegisterListView from '@/views/cachier/cash-registers/CashRegisterListView'

export default [
    {
        name: 'cachier-layout',
        component: CachierLayout,
        path: '/cachier',
        meta: {
            middleware: ['auth', 'cashier'],
        },

        children: [
            {
                name: 'cachier.index',
                path: '',
                component: IndexView
            },

            {
                name: 'cachier.tickets',
                path: 'tickets',
                component: TicketListView
            },

            {
                name: 'cachier.movements',
                path: 'movements',
                component: MovementListView
            },
            {
                name: 'cachier.movements.create',
                path: 'movements/create',
                component: MovementCreateView
            },


            {
                name: 'cachier.cash-registers',
                path: 'cash-registers',
                component: CashRegisterListView
            },

        ]
    },
]