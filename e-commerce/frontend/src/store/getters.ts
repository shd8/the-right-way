/* eslint-disable no-underscore-dangle */
import {
  State, User, Product, Rating,
} from '@/types/interfaces';

const getters = {

  getProductsByCategory:
  (state:State) => (category: string): Array<Product> => state.products
    .filter((product) => product.category?.toLowerCase() === category.toLowerCase()),

  getWishlistLength(state:State): number {
    return state.wishlist.length;
  },

  getCartLength(state:State): number {
    return state.cart.length;
  },

  getCartPrice(state:State): number {
    return state.cart
      .map((cartId: string) => state.products.find((product: Product) => product._id === cartId))
      .map((product: any) => product.price)
      .reduce((a:number, b:number) => a + b)
      .toFixed(2);
  },

  getCurrentProductRate(state:State): string {
    return (state.currentProduct.ratings
      .map((rate: Rating) => rate.rating)
      .reduce((a:number, b:number) => a + b, 0) / state.currentProduct.ratings.length)
      .toFixed(2);
  },

  getProductById:
  (state:any) => (id: any) => state.products.find((product:any) => product._id === id),

  isInWishlist:
  (state:any) => (id:any) => state.wishlist.some((productId:any) => productId === id),

  isInCart:
  (state:any) => (id:any) => state.cart.some((productId:any) => productId === id),

};

export default getters;
