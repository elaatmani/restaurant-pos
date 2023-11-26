import { createRouter, createWebHistory } from 'vue-router'
import cachier from './routes/cachier';
import ticket from './routes/ticket';
import dashboard from './routes/dashboard';

// middleware
import authMiddleware from './middleware/auth.middleware';

import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/auth/LoginView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      middleware: ['auth'],
    },
    component: LoginView
  },
  ...dashboard,
  ...cachier,
  ...ticket
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach(authMiddleware)

export default router
