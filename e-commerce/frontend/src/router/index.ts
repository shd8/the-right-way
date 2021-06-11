import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Profile from '../views/Profile.vue';
import Wishlist from '../views/Wishlist.vue';
import Cart from '../views/Cart.vue';
import Dashboard from '../views/Dashboard.vue';
import Detail from '../views/Detail.vue';
import SearchCategory from '../views/SearchCategory.vue';
import Search from '../views/Search.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/wishlist',
    name: 'Wishlist',
    component: Wishlist,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/search/',
    name: 'Search',
    component: Search,
  },
  {
    path: '/search/:category',
    name: 'SearchCategory',
    component: SearchCategory,
    props: true,
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
