import { mount } from '@vue/test-utils';
import App from '@/App.vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Dashboard from '@/views/Dashboard.vue';
import Profile from '@/views/Profile.vue';
import Wishlist from '@/views/Wishlist.vue';
import Cart from '@/views/Cart.vue';
import Search from '@/views/Search.vue';
import SearchCategory from '@/views/SearchCategory.vue';
import Detail from '@/views/Detail.vue';

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
    props: true,
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

test('displays message', () => {
  const wrapper = mount(App, {
    global: {
      plugins: [router],
      mocks: {
        $store: {
          getters: {
            getCartLength: '1',
            getWishlistLength: '1',
          },
        },
      },
    },
  });
  // Assert the rendered text of the component
  expect(wrapper.text()).toContain('11');
});
