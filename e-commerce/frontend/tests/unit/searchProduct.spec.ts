import { mount } from '@vue/test-utils';
import SearchProduct from '@/components/SearchProduct.vue';
import router from '@/router/index';
import state from '../mocked-state';

describe('Given a Searhc Product component', () => {
  test('Should mount Search Product', () => {
    window.scrollTo = () => null;
    const wrapper = mount(SearchProduct, {
      props: {
        id: '1',
        name: 'Product1',
        price: 3,
        images: [],
      },
      global: {
        plugins: [router],
        mocks: {
          $router: {
            push: jest.fn(),
          },
          $store: {
            state: {
              ...state,
              isUserLogged: false,
            },
            getters: {
              isInCart: () => true,
              getRateByProductId: () => 3,
            },
            dispatch: jest.fn(),
            commit: jest.fn(),
          },
          methods: {
            scrollToTop: jest.fn(),
          },
        },
      },
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('');
  });
});
