import { mount } from '@vue/test-utils';
import CartProduct from '@/components/CartProduct.vue';
import router from '@/router/index';
import actions from '@/store/actions';
import state from '../mocked-state';

jest.mock('@/store/actions');

const mockRouter = {
  push: jest.fn(),
};

describe('Given an Cart Product component', () => {
  test('Should mount Cart Product', () => {
    const wrapper = mount(CartProduct, {
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
            },
          },
        },
      },
    });
    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('');
  });

  test('When trash button is clicked, should call action retrieve from User Cart', async () => {
    const $store = {
      state: {
        ...state,
        isUserLogged: true,
      },
      getters: {
        isInWishlist: () => true,
      },
      actions,
      dispatch: jest.fn(),
      commit: jest.fn(),
    };

    const wrapper = mount(CartProduct, {
      props: {
        id: 'abc',
        name: 'Product1',
        price: 3,
        images: [],
      },
      global: {
        plugins: [router],
        mocks: {
          $store,
        },
      },
    });

    await wrapper.find('button').trigger('click');

    expect($store.dispatch).toHaveBeenCalledWith('retrieveFromUserCart', 'abc');
  });

  test('When link is clicked, should call scroll to top', async () => {
    window.scrollTo = () => null;
    const $store = {
      state: {
        ...state,
        isUserLogged: true,
      },
      getters: {
        isInWishlist: () => true,
      },
      actions,
      dispatch: jest.fn(),
      commit: jest.fn(),
    };

    const methods = {
      scrollToTop: jest.fn(),
    };

    const props = {
      id: 'abc',
      name: 'Product1',
      price: 3,
      images: [],
    };

    const wrapper = mount(CartProduct, {
      props,
      global: {
        mocks: {
          $router: mockRouter,
          $store,
          methods,
        },
      },
    });

    const scrollToTop = jest.fn();
    scrollToTop();

    await wrapper.find('.link').trigger('click');

    expect(scrollToTop).toHaveBeenCalled();
  });
});
