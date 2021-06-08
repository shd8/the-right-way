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

  addToUserWishlist({ commit, state }:any, id:any) {
    commit('addToWishlist', id);

    const config = {
      headers: {
        Authorization: `Bearer ${state.token}`,
        body: {
          wishlist: state.wishlist,

        },
      },
    };
    console.log(`Config: ${config.headers.Authorization}`);
    // eslint-disable-next-line no-underscore-dangle
    console.log();
    console.log(`User data ${config.headers.body.wishlist}`);
    // axios.post(process.env.VUE_APP_API_USERS, config);
  },

  updateUserData({ commit, token, state }:any) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    console.log(`Config: ${config}`);
    console.log(`User data ${state.currentUser}`);
    console.log(`VUE_APP_API_USERS ${process.env.VUE_APP_API_USERS}`);
    // axios.post(process.env.VUE_APP_API_USERS, userData);
  },

};

export default actions;
