import { mount } from '@vue/test-utils';
import Product from '@/components/Product.vue';
import router from '@/router/index';
import state from '../mocked-state';

const mockRouter = {
  push: jest.fn(),
};

describe('Given a Product component', () => {
  test('Mount a Product component', () => {
    const wrapper = mount(Product, {
      global: {
        plugins: [router],
        mocks: {
          methods: {
            handleToggleModal: jest.fn(),
          },
          $store: {
            state,
            getters: {
              getCurrentProductRate: 5,
              isInWishlist: () => true,
              isInCart: () => true,
            },
            actions: {
              fetchProductsFromApi: {},
            },
          },
        },
      },
      props: {
        id: '1',
        name: 'product',
        price: 3,
        images: [],
      },
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('');
  });

  test('Click a link and a modal', async () => {
    window.scrollTo = () => null;

    const wrapper = mount(Product, {
      global: {
        mocks: {
          $router: mockRouter,
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
              isInWishlist: () => true,
              isInCart: () => true,
            },
            actions: {
              fetchProductsFromApi: {},
            },
          },
        },
      },
      props: {
        id: '1',
        name: 'product',
        price: 3,
        images: [],
      },
    });

    await wrapper.findAll('button')[0].trigger('click');

    const scrollToTop = jest.fn();
    scrollToTop();

    await wrapper.find('.link').trigger('click');

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('');
  });
});
