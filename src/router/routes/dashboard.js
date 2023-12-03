import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import DashboardView from '@/views/dashboard/DashboardView'
import SettingsView from '@/views/dashboard/settings/SettingsView'
import UsersView from '@/views/dashboard/users/UsersView'
import MenuView from '@/views/dashboard/menu/MenuView'
import FinanceView from '@/views/dashboard/finance/FinanceView';
import ItemCreateView from '@/views/dashboard/menu/items/ItemCreateView'
import ItemUpdateView from '@/views/dashboard/menu/items/ItemUpdateView'

export default [{
    path: '/dashboard',
    component: DashboardLayout,
    meta: {
        middleware: ['auth'],
    },
    children: [
        {
            name: 'dashboard',
            path: '',
            component: DashboardView
        },

        {
            name: 'dashboard.settings',
            path: 'settings',
            component: SettingsView
        },

        {
            name: 'dashboard.users',
            path: 'users',
            component: UsersView
        },

        {
            name: 'dashboard.menu',
            path: 'menu',
            component: MenuView
        },

        {
            path: 'cash',
            name: 'dashboard.finance',
            component: FinanceView
        },

        {
            path: 'items',
            children: [
                {
                    name: 'dashboard.items.create',
                    path: 'create',
                    component: ItemCreateView
                },
        
                {
                    name: 'dashboard.items.update',
                    path: ':id/edit',
                    component: ItemUpdateView
                }
            ]
        }


    ]
}]