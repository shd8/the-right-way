/* eslint-disable no-underscore-dangle */
import { createStore } from 'vuex';
import getters from '@/store/getters';
import mutations from '@/store/mutations';
import actions from '@/store/actions';

export default createStore({
  state: {
    wishlist: [],
    cart: [],
    count: 0,
    products: [],
    currentProduct: {
      _id: '',
      name: '',
      category: '',
      price: 0,
      stock: 0,
      images: [],
      ratings: [],
    },
    currentUser: {
      _id: '',
      username: '',
      email: '',
      password: '',
      address: {
        country: '',
        city: '',
        street: '',
        postalCode: '',
      },
    },
    isUserLogged: false,
    token: '',
  },
  getters,
  mutations,
  actions,
  modules: {
  },
});
