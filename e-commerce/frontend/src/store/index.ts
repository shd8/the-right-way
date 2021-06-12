/* eslint-disable no-underscore-dangle */
import { createStore } from 'vuex';
import getters from '@/store/getters';
import mutations from '@/store/mutations';
import actions from '@/store/actions';
import state from '@/store/state';

export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules: {
  },
});
