import { createRouter, createWebHistory } from 'vue-router'
import cachier from './routes/cachier';
import ticket from './routes/ticket';
import dashboard from './routes/dashboard';

// middleware
import authMiddleware from './middleware/auth.middleware';
import adminMiddleware from './middleware/admin.middleware';
import cashierMiddleware from './middleware/cashier.middleware';

import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/auth/LoginView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      middleware: ['auth']
    }
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
router.beforeEach(adminMiddleware)
router.beforeEach(cashierMiddleware)

export default router
