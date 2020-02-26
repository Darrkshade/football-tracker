import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/maersk-table',
    name: 'MaerskLeague',
    component: () => import('../views/MaerskLeague.vue')
  },
  {
    path: '/prem-league',
    name: 'PremLeague',
    component: () => import('../views/PremLeague.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
