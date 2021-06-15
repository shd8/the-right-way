import actions from '@/store/actions';
import { Commit } from 'vuex';
import { State, User } from '@/types/interfaces';
import axios from 'axios';
import { configActionContextAndState, configActionContext } from '../test-utils';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const commit = jest.fn() as jest. MockedFunction<Commit>;

describe('Given an object of actions', () => {
  let state: State;

  beforeEach(() => {
    state = {
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
  });

  test('Fetch all products from API', async () => {
    mockedAxios.get.mockResolvedValue({
      data: [],
    });

    await actions.fetchProductsFromApi(configActionContext(commit));

    expect(commit).toHaveBeenCalled();
  });

  test('Fetch a product from API', async () => {
    mockedAxios.get.mockResolvedValue({
      data: [],
    });

    await actions.fetchProductFromApi(configActionContext(commit), 'abc');

    expect(commit).toHaveBeenCalled();
  });

  test('Log a user', async () => {
    mockedAxios.post.mockResolvedValue({
      data: [],
    });

    const userData = {} as User;

    await actions.logUserRequest(configActionContext(commit), userData);

    expect(commit).toHaveBeenCalled();
  });

  test('Register a new user successfully', async () => {
    mockedAxios.post.mockResolvedValue({
      data: [],
    });

    const userData = {} as User;

    await actions.registerUserRequest(configActionContext(commit), userData);

    expect(axios.post).toHaveBeenCalled();
  });

  test('Make a purchase request', async () => {
    await actions.purchaseRequest(configActionContextAndState(commit, state));

    expect(commit).toHaveBeenCalled();
  });

  test('Add to user wishlist', async () => {
    await actions.addToUserWishlist(configActionContextAndState(commit, state), 'abc123');

    expect(commit).toHaveBeenCalled();
  });

  test('Retrieve from user wishlist', async () => {
    await actions.retrieveFromUserWishlist(configActionContextAndState(commit, state), 'abc123');

    expect(commit).toHaveBeenCalled();
  });

  test('Add to user cart', async () => {
    await actions.addToUserCart(configActionContextAndState(commit, state), 'abc123');

    expect(commit).toHaveBeenCalled();
  });

  test('Retrieve from user cart', async () => {
    await actions.retrieveFromUserCart(configActionContextAndState(commit, state), 'abc123');

    expect(commit).toHaveBeenCalled();
  });
});

test('Register a new user and catch an error', async () => {
  mockedAxios.post.mockRejectedValue({
    data: [],
  });

  const userData = {} as User;

  await actions.registerUserRequest(configActionContext(commit), userData);

  expect(axios.post).toHaveBeenCalled();
});
