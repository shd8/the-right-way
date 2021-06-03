/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-underscore-dangle */
import { createStore } from 'vuex';
import getters from '@/store/getters';
import mutations from '@/store/mutations';
import axios from 'axios';

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
  actions: {
    fetchProductsFromApi({ commit }) {
      axios.get(`${process.env.VUE_APP_API_URL}/products`).then((response) => {
        commit('updateProducts', response.data);
      });
    },
    fetchProductFromApi({ commit }, id) {
      axios.get(`${process.env.VUE_APP_API_URL}/products/${id}`).then((response) => {
        commit('updateCurrentProduct', response.data);
      });
    },
  },
  modules: {
  },
});
