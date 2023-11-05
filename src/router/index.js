import { createRouter, createWebHistory } from 'vue-router'
import cachier from './cachier';
import ticket from './ticket';

import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/auth/LoginView.vue'
import DashboardLayout from '@/layouts/dashboard/DashboardLayout'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/dashboard',
    component: DashboardLayout,
    children: [
      {
        name: 'dashboard',
        path: '',
        component: HomeView
      }
    ]
  },

  ...cachier,
  ...ticket
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
