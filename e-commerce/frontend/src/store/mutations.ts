/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const mutations = {
  increaseOne(state:any) {
    state.count += 1;
  },

  decreaseOne(state:any) {
    state.count -= 1;
  },

  updateProducts(state: any, payload:any) {
    state.products = [...payload];
  },

  updateCurrentProduct(state:any, payload:any) {
    state.currentProduct = payload;
  },

  addToWishlist(state:any, payload:any) {
    state.wishlist.push(payload);
  },

  retrieveFromWishlist(state:any, payload:any) {
    state.wishlist = state.wishlist.filter((productId:any) => productId !== payload);
  },

  addToCart(state:any, payload:any) {
    state.cart.push(payload);
  },

  retrieveFromCart(state:any, payload:any) {
    state.cart = state.cart.filter((productId:any) => productId !== payload);
  },

  logUser(state:any, payload:any) {
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

  logoutUser(state:any) {
    state.isUserLogged = false;
  },
};

export default mutations;
