/* eslint-disable no-underscore-dangle */
import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    wishlistLenght: 0,
    cartLength: 0,
    count: 0,
    products: [{ _id: 'hola' }],
    currentProduct: {},
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
    getCurrentProduct(state) {
      return state.currentProduct;
    },
    getProductById: (state) => (id: any) => state.products.find((product) => product._id === id),
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
