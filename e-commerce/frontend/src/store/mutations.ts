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
  addToCart(state:any, payload:any) {
    state.cart.push(payload);
  },
  addToWishlist(state:any, payload:any) {
    state.wishlist.push(payload);
  },
};

export default mutations;
