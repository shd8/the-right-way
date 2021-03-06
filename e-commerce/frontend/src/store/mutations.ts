/* eslint-disable no-underscore-dangle */
import { Product, UserFromApi, State } from '@/types/interfaces';

const mutations = {

  updateProducts(state: State, payload: Array<Product>): void {
    state.products = [...payload];
  },

  updateCurrentProduct(state:State, payload: Product): void {
    state.currentProduct = payload;
  },

  addToWishlist(state:State, payload:string): void {
    state.wishlist.push(payload);
  },

  retrieveFromWishlist(state:State, payload:string): void {
    state.wishlist = state.wishlist.filter((productId:string) => productId !== payload);
  },

  addToCart(state:State, payload:string): void {
    state.cart.push(payload);
  },

  retrieveFromCart(state:State, payload:string): void {
    state.cart = state.cart.filter((productId:string) => productId !== payload);
  },

  emptyCart(state: State): void {
    state.cart.splice(0, state.cart.length);
  },

  logUser(state:State, payload: UserFromApi): void {
    state.isUserLogged = true;
    state.token = payload.token;
    state.currentUser._id = payload.user._id;
    state.currentUser.username = payload.user.username;
    state.currentUser.email = payload.user.email;
    state.currentUser.password = payload.user.password;
    state.currentUser.address.country = payload.user.address.country;
    state.currentUser.address.city = payload.user.address.city;
    state.currentUser.address.street = payload.user.address.street;
    state.currentUser.address.postalCode = payload.user.address.postalCode;
    state.wishlist = payload.user.wishlist;
    state.cart = payload.user.cart;
  },

  logoutUser(state:State): void {
    state.isUserLogged = false;
    state.cart.splice(0, state.cart.length);
    state.wishlist.splice(0, state.wishlist.length);
    state.token = '';
  },

  changeRightMode(state: State): void {
    state.rightMode = !state.rightMode;
  },

};

export default mutations;
