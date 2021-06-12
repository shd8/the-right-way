import state from '@/store/state';

test('State call', () => {
  expect(state).toEqual({
    cart: [],
    currentProduct: {
      _id: '', category: '', images: [], name: '', price: 0, ratings: [], stock: 0,
    },
    currentUser: {
      _id: '',
      address: {
        city: '', country: '', postalCode: '', street: '',
      },
      email: '',
      password: '',
      username: '',
    },
    isUserLogged: false,
    products: [],
    rightMode: false,
    token: '',
    wishlist: [],
  });
});
