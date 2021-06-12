const state = {
  wishlist: [],
  cart: [],
  products: [],
  currentProduct: {
    _id: '',
    name: '',
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

export default state;
