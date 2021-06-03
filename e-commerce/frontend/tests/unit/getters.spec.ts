import getters from '@/store/getters';

test('Count getter', () => {
  const state = { count: 1 };
  const result = getters.getCount(state);

  expect(result).toBe(1);
});

test('Products getter', () => {
  const state = {
    products: {
      name: 'admin product',
      _id: 'abc',
    },
  };
  const result = getters.getProducts(state);

  expect(result).toEqual({
    name: 'admin product',
    _id: 'abc',
  });
});

test('Wishlist length getter', () => {
  const state = {
    wishlistLength: 3,
  };
  const result = getters.getWishlistLength(state);

  expect(result).toBe(3);
});

test('Cart length getter', () => {
  const state = {
    cartLength: 3,
  };
  const result = getters.getCartLength(state);

  expect(result).toBe(3);
});

test('Current product getter', () => {
  const state = {
    currentProduct: {
      _id: 'abc',
      name: 'admin product',
    },
  };
  const result = getters.getCurrentProduct(state);

  expect(result).toEqual({
    _id: 'abc',
    name: 'admin product',
  });
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
