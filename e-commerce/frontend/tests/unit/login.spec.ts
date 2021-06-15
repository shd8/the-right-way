import { mount } from '@vue/test-utils';
import Login from '@/components/Login.vue';
import router from '@/router/index';
import state from '../mocked-state';

describe('Given a login component', () => {
  test('Click login', async () => {
    const wrapper = mount(Login, {
      global: {
        mocks: {
          methods: {
            handleToggleModal: jest.fn(),
          },
          $store: {
            state: {
              ...state,
              isUserLogged: false,
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

    await wrapper.find('form').trigger('submit');

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('Login or create an account to buy stuff, save your Wishlist and your conversations !');
  });

  test('Click login with password and email', () => {
    const wrapper = mount(Login, {
      global: {
        mocks: {
          methods: {
            handleToggleModal: jest.fn(),
          },
          $store: {
            state: {
              ...state,
              isUserLogged: false,
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

    const email = wrapper.findAll('input')[0];
    const password = wrapper.findAll('input')[1];

    email.element.value = 'a@mail.com';
    password.element.value = '1234';

    wrapper.find('form').trigger('submit');

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('Login or create an account to buy stuff, save your Wishlist and your conversations !');
  });

  test('Mount a Login component when user is logged', () => {
    const wrapper = mount(Login, {
      global: {
        plugins: [router],
        mocks: {
          $store: {
            state,
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

  test('Click login with user and password', async () => {
    const wrapper = mount(Login, {
      global: {
        mocks: {
          methods: {
            handleToggleModal: jest.fn(),
          },
          $store: {
            state: {
              ...state,
              isUserLogged: false,
            },
            getters: {
              getCurrentProductRate: 5,
              isInWishlist: true,
            },
            actions: {
              logUserRequest: jest.fn(),
            },
            dispatch: jest.fn(),
            commit: jest.fn(),
          },
        },
      },
      props: {
        id: 2,
      },
      data() {
        return {
          email: 'a@mail.com',
          password: '1234',
        };
      },
    });

    await wrapper.find('form').trigger('submit');

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('Login or create an account to buy stuff, save your Wishlist and your conversations !');
  });
});
