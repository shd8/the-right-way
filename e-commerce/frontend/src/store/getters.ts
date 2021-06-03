/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
const getters = {
  getCount(state:any) {
    return state.count;
  },
  getProducts(state:any) {
    return state.products;
  },
  getWishlistLength(state:any) {
    return state.wishlist.length;
  },
  getCartLength(state:any) {
    return state.cart.length;
  },
  getCurrentProduct(state:any) {
    return state.currentProduct;
  },
  getCurrentProductRate(state:any) {
    const ratingNumbers:any = [];
    state.currentProduct.ratings.forEach((rate:any) => { ratingNumbers.push(rate.rating); });
    return (ratingNumbers.reduce((a:any, b:any) => a + b) / ratingNumbers.length).toFixed(2);
  },
  getProductById:
  (state:any) => (id: any) => state.products.find((product:any) => product._id === id),
  getCart(state:any) {
    return state.cart;
  },
  getWishlist(state:any) {
    return state.wishlist;
  },
};

export default getters;
