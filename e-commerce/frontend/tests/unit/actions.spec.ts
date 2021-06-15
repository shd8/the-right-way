import actions from '@/store/actions';
import { Commit, Dispatch } from 'vuex';
import { State, User } from '@/types/interfaces';
import axios from 'axios';
import {
  configActionContextAndState,
  configActionContext,
  configActionContextDispatch,
} from '../test-utils';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const commit = jest.fn() as jest. MockedFunction<Commit>;
const dispatch = jest.fn() as jest. MockedFunction<Dispatch>;

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

    await actions.registerUserRequest(configActionContextDispatch(dispatch), userData);

    expect(axios.post).toHaveBeenCalled();
  });

  test('Make a purchase request', () => {
    actions.purchaseRequest(configActionContextAndState(commit, state));

    expect(commit).toHaveBeenCalled();
  });

  test('Add to user wishlist', () => {
    actions.addToUserWishlist(configActionContextAndState(commit, state), 'abc123');

    expect(commit).toHaveBeenCalled();
  });

  test('Retrieve from user wishlist', () => {
    actions.retrieveFromUserWishlist(configActionContextAndState(commit, state), 'abc123');

    expect(commit).toHaveBeenCalled();
  });

  test('Add to user cart', () => {
    actions.addToUserCart(configActionContextAndState(commit, state), 'abc123');

    expect(commit).toHaveBeenCalled();
  });

  test('Retrieve from user cart', () => {
    actions.retrieveFromUserCart(configActionContextAndState(commit, state), 'abc123');

    expect(commit).toHaveBeenCalled();
  });
});
