import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    wishlistLenght: 0,
    cartLength: 0,
    count: 0,
    pokemons: [{ 1: 'hola' }],
  },
  getters: {
    getCount(state) {
      return state.count;
    },
    getPokemons(state) {
      return state.pokemons;
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
    updatePokemons(state: any, payload) {
      state.pokemons = [...payload];
    },
  },
  actions: {
    getPokemonsFromApi({ commit }) {
      axios.get('http://localhost:4000/api/products/').then((response) => {
        console.log(response);
        console.log(response.data);
        commit('updatePokemons', response.data);
      });
    },
  },
  modules: {
  },
});
