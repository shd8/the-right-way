const mockedState = {
  wishlist: ['abcd123'],
  cart: ['abcd123', 'abcd321'],
  products: [
    {
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
    },
    {
      _id: 'abcd321',
      name: 'product2',
      category: 'OFFICE',
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
    ratings: [{
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
  isUserLogged: true,
  token: '',
  rightMode: true,
};

export default mockedState;
