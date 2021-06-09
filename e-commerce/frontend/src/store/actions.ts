/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import { ActionContext } from 'vuex';
import { State, User } from '@/types/interfaces';

const actions = {
  fetchProductsFromApi({ commit }:ActionContext<State, State>): void {
    axios.get(`${process.env.VUE_APP_API_URL}/products`).then((response) => {
      commit('updateProducts', response.data);
    });
  },

  fetchProductFromApi({ commit }:ActionContext<State, State>, id:string): void {
    axios.get(`${process.env.VUE_APP_API_URL}/products/${id}`).then((response) => {
      commit('updateCurrentProduct', response.data);
    });
  },

  logUserRequest({ commit }:ActionContext<State, State>, userData: User): void {
    axios.post(process.env.VUE_APP_AUTH_LOGIN_URL, userData)
      .then((response) => {
        commit('logUser', response.data);
      });
  },

  registerUserRequest({ commit }:ActionContext<State, State>, userData: User): void {
    axios.post(process.env.VUE_APP_AUTH_REGISTER_URL, userData);
    // .then((response) => {
    //   commit('logUser', response.data);
    // });
  },

  addToUserWishlist({ commit, state }:ActionContext<State, State>, id:string): void {
    commit('addToWishlist', id);

    const data = {
      wishlist: state.wishlist,
      _id: state.currentUser._id,
    };

    const authorization = {
      headers: {
        Authorization: `Bearer ${state.token}`,
      },
    };

    axios.post(process.env.VUE_APP_API_USERS, data, authorization);
  },

  retrieveFromUserWishlist({ commit, state }:ActionContext<State, State>, id:string): void {
    commit('retrieveFromWishlist', id);

    const data = {
      wishlist: state.wishlist,
      _id: state.currentUser._id,
    };

    const authorization = {
      headers: {
        Authorization: `Bearer ${state.token}`,
      },
    };

    axios.post(process.env.VUE_APP_API_USERS, data, authorization);
  },

  addToUserCart({ commit, state }:ActionContext<State, State>, id:string): void {
    commit('addToCart', id);

    const data = {
      cart: state.cart,
      _id: state.currentUser._id,
    };

    const authorization = {
      headers: {
        Authorization: `Bearer ${state.token}`,
      },
    };

    axios.post(process.env.VUE_APP_API_USERS, data, authorization);
  },

  retrieveFromUserCart({ commit, state }:ActionContext<State, State>, id:string): void {
    commit('retrieveFromCart', id);

    const data = {
      cart: state.cart,
      _id: state.currentUser._id,
    };

    const authorization = {
      headers: {
        Authorization: `Bearer ${state.token}`,
      },
    };

    axios.post(process.env.VUE_APP_API_USERS, data, authorization);
  },

};

export default actions;
