import { mount } from '@vue/test-utils';
import Register from '@/components/Register.vue';
import router from '@/router/index';
import state from '../mocked-state';

describe('Given a register component', () => {
  test('Click register without data', () => {
    const wrapper = mount(Register, {
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
    expect(wrapper.text()).toContain('Fill in all the fields and click on register Please, check the following errors: Credentials  Address');
  });

  test('Click register with all data', () => {
    const wrapper = mount(Register, {
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
          username: 'a',
          email: 'a@mail.com',
          password: '1234',
          country: 'a',
          city: 'a',
          street: 'a',
          postalCode: '123',
          errors: [],
        };
      },
    });

    const email = wrapper.findAll('input')[0];
    const password = wrapper.findAll('input')[1];

    email.element.value = 'a@mail.com';
    password.element.value = '1234';

    wrapper.find('form').trigger('submit');

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('Fill in all the fields and click on register Please, check the following errors: Credentials  Address');
  });

  test('Mount a Register component when user is logged', () => {
    const wrapper = mount(Register, {
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
});
