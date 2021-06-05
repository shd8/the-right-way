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
    isLogged: true,
  },
  getters,
  mutations,
  actions,
  modules: {
  },
});
