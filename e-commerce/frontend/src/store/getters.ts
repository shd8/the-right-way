/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-underscore-dangle */
import {
  State, Product, Rating,
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

  getCartPrice(state:State): string {
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

  getRateByProductId:
  (state:State) => (id:string):any => {
    const product: any = state.products
      .find((element: any) => element._id === id);

    return (product.ratings
      .map((rate: Rating) => rate.rating)
      .reduce((a:number, b:number) => a + b, 0) / product.ratings.length).toFixed(2);
  },

  getProductById:
  (state:State) => (id: string): any => state.products
    .find((product: Product) => product._id === id),

  isInWishlist:
  (state:State) => (id:string): boolean => state.wishlist
    .some((productId:string) => productId === id),

  isInCart:
  (state:State) => (id:string): boolean => state.cart
    .some((productId:string) => productId === id),

};

export default getters;
