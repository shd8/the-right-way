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
    state.token = payload.token;
    state.currentUser.username = payload.username;
    state.currentUser.email = payload.email;
    state.currentUser.password = payload.password;
    state.currentUser.address.city = payload.city;
    state.currentUser.address.street = payload.street;
    state.currentUser.address.postalCOde = payload.postalCode;
    state.wishlist = payload.wishlist;
    state.cart = payload.cart;

    console.log(payload.user);
  },

  logoutUser(state:any) {
    state.isUserLogged = false;
  },
};

export default mutations;
