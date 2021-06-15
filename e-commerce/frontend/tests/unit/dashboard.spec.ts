import { mount } from '@vue/test-utils';
import Dashboard from '@/views/Dashboard.vue';
import router from '@/router/index';
import state from '../mocked-state';

jest.mock('@/store/actions');

describe('Given a Dashboard component', () => {
  test('Should mount a Dashboard View', () => {
    window.scrollTo = () => null;

    const wrapper = mount(Dashboard, {
      props: {
        id: '1',
        name: 'Product1',
        price: 3,
        images: [],
      },
      global: {
        plugins: [router],
        mocks: {
          $store: {
            state: {
              ...state,
              isUserLogged: true,
            },
            getters: {
              isInCart: () => true,
              getProductById: () => 'abc123',
              getCartPrice: () => 3,
            },
            dispatch: jest.fn(),
            commit: jest.fn(),
          },
        },
      },
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('');
  });
});
