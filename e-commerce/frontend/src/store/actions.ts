/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios';

const actions = {
  fetchProductsFromApi({ commit }:any) {
    axios.get(`${process.env.VUE_APP_API_URL}/products`).then((response) => {
      commit('updateProducts', response.data);
    });
  },

  fetchProductFromApi({ commit }:any, id:any) {
    axios.get(`${process.env.VUE_APP_API_URL}/products/${id}`).then((response) => {
      commit('updateCurrentProduct', response.data);
    });
  },

  logUserRequest({ commit }:any, userData:any) {
    axios.post(process.env.VUE_APP_AUTH_LOGIN_URL, userData)
      .then((response) => {
        commit('logUser', response.data);
      });
  },

  registerUserRequest({ commit }:any, userData:any) {
    axios.post(process.env.VUE_APP_AUTH_REGISTER_URL, userData);
    // .then((response) => {
    //   commit('logUser', response.data);
    // });
  },

  addToUserWishlist({ commit, state }:any, id:any) {
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

  retrieveFromUserWishlist({ commit, state }:any, id:any) {
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

  addToUserCart({ commit, state }:any, id:any) {
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

  retrieveFromUserCart({ commit, state }:any, id:any) {
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
