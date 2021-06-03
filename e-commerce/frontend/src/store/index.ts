/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-underscore-dangle */
import { createStore } from 'vuex';
import getters from '@/store/getters';
import mutations from '@/store/mutations';
import actions from '@/store/actions';

export default createStore({
  state: {
    wishlistLength: 0,
    cartLength: 0,
    count: 0,
    products: [{ _id: 'hola' }],
    currentProduct: { ratings: [{ rating: 5 }] },
  },
  getters,
  mutations,
  actions,
  modules: {
  },
});
