import getters from '@/store/getters';
import mockedState from '../mocked-state';

describe('Given a getter', () => {
  test('Get products by category', () => {
    const result = getters.getProductsByCategory(mockedState)('LEFTICIANS');

    expect(result).toEqual([{
      _id: 'abcd123',
      name: 'product1',
      category: 'LEFTICIANS',
      price: 5,
      stock: 0,
      images: [],
      ratings: [
        {
          user: 'one',
          rating: 1,
          comment: 'comment one',
        },
        {
          user: 'two',
          rating: 2,
          comment: 'comment two',
        },
      ],
    }]);
  });

  test('Get wishlist length', () => {
    const result = getters.getWishlistLength(mockedState);

    expect(result).toBe(1);
  });

  test('Get cart length', () => {
    const result = getters.getCartLength(mockedState);

    expect(result).toBe(2);
  });

  test('Get cart price', () => {
    const result = getters.getCartPrice(mockedState);

    expect(result).toBe('5.00');
  });

  test('Get current product rate', () => {
    const result = getters.getCurrentProductRate(mockedState);

    expect(result).toBe('1.50');
  });

  test('Get rate by product id', () => {
    const result = getters.getRateByProductId(mockedState)('abcd123');

    expect(result).toBe('1.50');
  });

  test('Get product by id', () => {
    const result = getters.getProductById(mockedState)('abcd123');

    expect(result).toEqual({
      _id: 'abcd123',
      name: 'product1',
      category: 'LEFTICIANS',
      price: 5,
      stock: 0,
      images: [],
      ratings: [
        {
          user: 'one',
          rating: 1,
          comment: 'comment one',
        },
        {
          user: 'two',
          rating: 2,
          comment: 'comment two',
        },
      ],
    });
  });

  test('Is in wishlist', () => {
    const result = getters.isInWishlist(mockedState)('abcd123');

    expect(result).toBe(true);
  });

  test('Is in cart', () => {
    const result = getters.isInCart(mockedState)('abcd123');

    expect(result).toBe(true);
  });
});
