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
    console.log('llega al action');
    console.log(userData);
    // const mockedData = {
    //   email: 'ferlopeta@gmail.com',
    //   password: 12345,
    // };
    axios.post(process.env.VUE_APP_AUTH_URL, userData)
      .then((response) => {
        commit('logUser', response.data);
      });
  },
};

export default actions;
