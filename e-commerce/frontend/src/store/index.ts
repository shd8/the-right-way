/* eslint-disable @typescript-eslint/no-explicit-any */
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
    products: [{ _id: 'hola' }],
    currentProduct: { ratings: [{ rating: 5 }] },
    currentUser: {
      email: 'ferlopeta@gmail.com',
      password: 'fer1234',
      address: {
        country: 'Espein',
        city: 'Barsalona',
        street: 'Carré Aragó',
        postalCode: '12312',
      },
    },
    isUserLogged: false,
  },
  getters,
  mutations,
  actions,
  modules: {
  },
});
