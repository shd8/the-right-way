import { mount } from '@vue/test-utils';
import LoginRegister from '@/components/LoginRegister.vue';
import state from '../mocked-state';

describe('Given a loginregister component', () => {
  test('Mount a LoginRegister component', () => {
    const wrapper = mount(LoginRegister, {
      global: {
        mocks: {
          methods: {
            handleToggleModal: jest.fn(),
          },
          $store: {
            state,
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
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('');
  });

  test('Should click a Modal component', async () => {
    const wrapper = mount(LoginRegister, {
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
    });

    await wrapper.find('.register-button').trigger('click');

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('Login or create an account to buy stuff, save your Wishlist and your conversations !');
  });
});
