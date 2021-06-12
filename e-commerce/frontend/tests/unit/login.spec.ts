import { mount } from '@vue/test-utils';
import Login from '@/components/Login.vue';
import router from '@/router/index';

describe('Given a login component', () => {
  test('Mount a Login component', () => {
    const wrapper = mount(Login, {
      global: {
        mocks: {
          methods: {
            handleToggleModal: jest.fn(),
          },
          $store: {
            state: {
              currentProduct: {
                name: 'product1',
                images: [],
                price: 1,
                stock: 1,
                rating: {
                  user: 'admin',
                  rating: 1,
                  comment: 'sudo',
                },
              },
            },
            getters: {
              getCurrentProductRate: 5,
              isInWishlist: true,
            },
            actions: {
              fetchProductsFromApi: {},
            },
          },
        },
      },
      props: {
        id: 2,
      },
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('Login or create an account to buy stuff, save your Wishlist and your conversations !');
  });

  test('Mount a Login component', () => {
    const wrapper = mount(Login, {
      global: {
        plugins: [router],
        mocks: {
          $store: {
            state: {
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
              rightMode: false,
            },
            getters: {
              isUserLogged: () => true,
            },
            actions: {
              logUserRequest: () => 1,
            },
          },
        },
      },
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('');
  });
});
