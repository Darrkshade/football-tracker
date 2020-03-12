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
    path: '/prem-league',
    name: 'PremLeague',
    component: () => import('../views/PremLeague.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/league',
    name: 'InHouseLeague',
    component: () => import('../views/InHouseLeague.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/Test.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
