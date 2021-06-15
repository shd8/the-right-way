/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import { ActionContext } from 'vuex';
import { State, User } from '@/types/interfaces';

const actions = {
  async fetchProductsFromApi({ commit }:ActionContext<State, State>): Promise<any> {
    const { data } = await axios.get(`${process.env.VUE_APP_API_URL}/products`);

    commit('updateProducts', data);
  },

  async fetchProductFromApi({ commit }:ActionContext<State, State>, id:string): Promise<any> {
    const { data } = await axios.get(`${process.env.VUE_APP_API_URL}/products/${id}`);

    commit('updateCurrentProduct', data);
  },

  async logUserRequest({ commit }:ActionContext<State, State>, userData: User): Promise<any> {
    const { data } = await axios.post(process.env.VUE_APP_AUTH_LOGIN_URL, userData);

    commit('logUser', data);
  },

  async registerUserRequest(
    { dispatch }:ActionContext<State, State>, userData: User,
  ): Promise<any> {
    await axios.post(process.env.VUE_APP_AUTH_REGISTER_URL, userData);
    dispatch('logUserRequest', userData);
  },

  purchaseRequest({ commit, state }:ActionContext<State, State>): void {
    commit('emptyCart');

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
