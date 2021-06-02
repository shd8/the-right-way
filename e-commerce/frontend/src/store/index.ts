import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    wishlistLenght: 0,
    cartLength: 0,
    count: 0,
    products: [{ 1: 'hola' }],
  },
  getters: {
    getCount(state) {
      return state.count;
    },
    getProducts(state) {
      return state.products;
    },
    getWishlistLength(state) {
      return state.wishlistLenght;
    },
    getCartLength(state) {
      return state.cartLength;
    },
  },
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
  },
  actions: {
    fetchProductsFromApi({ commit }) {
      axios.get(`${process.env.VUE_APP_API_URL}/products`).then((response) => {
        commit('updateProducts', response.data);
      });
    },
  },
  modules: {
  },
});
