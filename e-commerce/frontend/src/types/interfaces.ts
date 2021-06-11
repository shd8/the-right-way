interface Rating {
    user: string,
    rating: number,
    comment: string
}

interface Product {
    _id: string,
    name: string,
    category: string,
    price: number,
    stock: number,
    images: Array<string>,
    ratings: Array<Rating>,
}

interface Address {
    country: string,
    city: string,
    street: string,
    postalCode: string
}

interface User {
    _id: string,
    username: string,
    email: string,
    password: string,
    address: Address,
    role: string,
    wishlist: Array<string>,
    cart: Array<string>,
}

interface UserFromApi {
    token: string,
    user: User
}

interface State {
    wishlist: Array<string>,
    cart: Array<string>,
    products: Array<Product>,
    currentProduct: Product,
    currentUser: {
      _id: string,
      username: string,
      email: string,
      password: string,
      address: {
        country: string,
        city: string,
        street: string,
        postalCode: string,
      },
    },
    isUserLogged: boolean,
    token: string,
    rightMode: boolean,
  }

export {
  Rating,
  Product,
  Address,
  User,
  UserFromApi,
  State,
};
