import getters from '@/store/getters';

test('Wishlist length getter', () => {
  const state = {
    wishlist: [{}, {}, {}],
  };
  const result = getters.getWishlistLength(state);

  expect(result).toBe(3);
});

test('Cart length getter', () => {
  const state = {
    cart: [{}, {}, {}],
  };
  const result = getters.getCartLength(state);

  expect(result).toBe(3);
});

test('Current rate getter', () => {
  const state = {
    currentProduct: {
      ratings: [
        { rating: 2 },
        { rating: 4 },
        { rating: 5 },
      ],
    },
  };
  const result = getters.getCurrentProductRate(state);

  expect(result).toBe('3.67');
});

test('Current rate getter', () => {
  const state = {
    products: [
      { _id: 2, name: 'product1' },
      { _id: 4, name: 'product2' },
      { _id: 5, name: 'product3' },
    ],
  };
  const result = getters.getProductById(state)(4);

  expect(result).toEqual({ _id: 4, name: 'product2' });
});
