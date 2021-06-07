/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-underscore-dangle */
import { createStore } from 'vuex';
import getters from '@/store/getters';
import mutations from '@/store/mutations';
import actions from '@/store/actions';

export default createStore({
  state: {
    wishlist: [],
    cart: [],
    count: 0,
    products: [{ _id: 'hola' }],
    currentProduct: { ratings: [{ rating: 5 }] },
    currentUser: {
      username: 'a',
      email: 'a@a.com',
      password: 'aaa',
      address: {
        country: 'aaa',
        city: 'aaa',
        street: 'aaa',
        postalCode: 'aaa',
      },
    },
    isUserLogged: false,
    token: 0,
  },
  getters,
  mutations,
  actions,
  modules: {
  },
});
