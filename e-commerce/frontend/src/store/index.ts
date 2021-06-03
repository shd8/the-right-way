/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-underscore-dangle */
import { createStore } from 'vuex';
import getters from '@/store/getters';
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
  mutations: {
    increaseOne(state) {
      state.count += 1;
    },
    decreaseOne(state) {
      state.count -= 1;
    },
    updateProducts(state: any, payload) {
      state.products = [...payload];
    },
    updateCurrentProduct(state:any, payload) {
      state.currentProduct = payload;
    },
  },
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
