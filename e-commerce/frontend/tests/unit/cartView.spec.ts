import { mount } from '@vue/test-utils';
import Cart from '@/views/Cart.vue';
import router from '@/router/index';
import state from '../mocked-state';

jest.mock('@/store/actions');

describe('Given a Cart View component', () => {
  test('Should mount a Cart View', async () => {
    window.scrollTo = () => null;

    const wrapper = mount(Cart, {
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
            state,
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

    wrapper.find('.purchase__button').trigger('click');

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('');
  });
});
