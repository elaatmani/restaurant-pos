import DashboardLayout from '@/layouts/dashboard/DashboardLayout';
import DashboardView from '@/views/dashboard/DashboardView'
import SettingsView from '@/views/dashboard/settings/SettingsView'
import UsersView from '@/views/dashboard/users/UsersView'
import MenuView from '@/views/dashboard/menu/MenuView'
import ItemCreateView from '@/views/dashboard/menu/items/ItemCreateView'

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
            name: 'dashboard.items.create',
            path: 'items/create',
            component: ItemCreateView
        }

    ]
}]