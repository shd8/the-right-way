import mutations from '@/store/mutations';
import { State } from '@/types/interfaces';

let mockedState:State;

describe('Given a mutation', () => {
  beforeEach(() => {
    mockedState = {
      wishlist: ['abcd123'],
      cart: ['abcd123'],
      products: [
        {
          _id: '',
          name: 'product1',
          category: '',
          price: 0,
          stock: 0,
          images: [],
          ratings: [],
        },
        {
          _id: '',
          name: 'product2',
          category: '',
          price: 0,
          stock: 0,
          images: [],
          ratings: [],
        },
      ],
      currentProduct: {
        _id: '',
        name: 'productA',
        category: '',
        price: 0,
        stock: 0,
        images: [],
        ratings: [],
      },
      currentUser: {
        _id: '',
        username: '',
        email: '',
        password: '',
        address: {
          country: '',
          city: '',
          street: '',
          postalCode: '',
        },
      },
      isUserLogged: false,
      token: '',
      rightMode: false,
    };
  });
  test('Update products and a payload, update list of products', () => {
    const payload = [
      {
        _id: '',
        name: 'product3',
        category: '',
        price: 0,
        stock: 0,
        images: [],
        ratings: [],
      },
      {
        _id: '',
        name: 'product4',
        category: '',
        price: 0,
        stock: 0,
        images: [],
        ratings: [],
      },
    ];
    mutations.updateProducts(mockedState, payload);

    expect(mockedState.products).toStrictEqual([
      {
        _id: '',
        name: 'product3',
        category: '',
        price: 0,
        stock: 0,
        images: [],
        ratings: [],
      },
      {
        _id: '',
        name: 'product4',
        category: '',
        price: 0,
        stock: 0,
        images: [],
        ratings: [],
      },
    ]);
  });

  test('Update current product and a payload, update current product', () => {
    const payload = {
      _id: '',
      name: 'productB',
      category: '',
      price: 0,
      stock: 0,
      images: [],
      ratings: [],
    };

    mutations.updateCurrentProduct(mockedState, payload);

    expect(mockedState.currentProduct).toEqual(
      {
        _id: '',
        name: 'productB',
        category: '',
        price: 0,
        stock: 0,
        images: [],
        ratings: [],
      },
    );
  });

  test('Add product to wishlist and a string, should add payload to wishlist', () => {
    const payload = 'abcd321';

    mutations.addToWishlist(mockedState, payload);

    expect(mockedState.wishlist).toEqual(
      [
        'abcd123',
        'abcd321',
      ],
    );
  });

  test('Retrieve product to wishlist and a string, should delete payload from wishlist', () => {
    const payload = 'abcd123';

    mutations.retrieveFromWishlist(mockedState, payload);

    expect(mockedState.wishlist).toEqual([]);
  });

  test('Add product to cart and a string, should add payload to wishlist', () => {
    const payload = 'abcd321';

    mutations.addToCart(mockedState, payload);

    expect(mockedState.cart).toEqual(
      [
        'abcd123',
        'abcd321',
      ],
    );
  });

  test('Retrieve product to cart and a string, should delete payload from wishlist', () => {
    const payload = 'abcd123';

    mutations.retrieveFromCart(mockedState, payload);

    expect(mockedState.cart).toEqual([]);
  });

  test('Empty cart, should retrieve every product form cart', () => {
    mutations.emptyCart(mockedState);

    expect(mockedState.cart).toEqual([]);
  });

  test('Log user and a payload, should log in the payloaded user', () => {
    const payload = {
      user: {
        _id: '000',
        username: 'test user',
        email: 'test@test.com',
        password: '',
        address: {
          country: 'test country',
          city: 'test city',
          street: 'test street',
          postalCode: 'test postal code',
        },
        role: 'test role',
        wishlist: [],
        cart: [],
      },
      token: 'abcd',
    };

    mutations.logUser(mockedState, payload);

    expect(mockedState.token).toBe('abcd');
  });

  test('Log out user, should log out the current user', () => {
    mutations.logoutUser(mockedState);

    expect(mockedState.isUserLogged).toBe(false);
  });

  test('Change right mode, change the right mode', () => {
    mutations.changeRightMode(mockedState);

    expect(mockedState.rightMode).toBe(true);
  });
});
