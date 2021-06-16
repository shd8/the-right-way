import { mount } from '@vue/test-utils';
import DetailProduct from '@/components/DetailProduct.vue';
import state from '../mocked-state';

const mockRouter = {
  push: jest.fn(),
};

describe('Given an detail product component', () => {
  test('Should mount detail product component when not logged', () => {
    const wrapper = mount(DetailProduct, {
      props: {
        id: '123',
        name: 'Admin',
        price: 3,
        images: [],
      },
      global: {
        mocks: {
          $store: {
            state,
            getters: {
              isInCart: () => true,
              isInWishlist: () => true,
            },
          },
          data: {
            showModal: false,
          },
        },
      },
    });
    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('arrowLeftarrowRight');
  });

  test('When Modal is clicked, should call toggle modal', async () => {
    const $store = {
      state: {
        ...state,
        isUserLogged: false,
      },
      getters: {
        isInWishlist: () => true,
        isInCart: () => true,
      },
      dispatch: jest.fn(),
      commit: jest.fn(),
    };

    const methods = {
      scrollToTop: jest.fn(),
      toggleModal: jest.fn(),
      handleToggleModal: jest.fn(),
      openImage: jest.fn(),
    };

    const props = {
      id: 'abc',
      name: 'Product1',
      price: 3,
      images: [],
    };

    const wrapper = mount(DetailProduct, {
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

    await wrapper.find('.modal-heart-right-mode').trigger('click');

    expect(scrollToTop).toHaveBeenCalled();
  });

  test('When an image is clicked, should call open image', async () => {
    window.open = () => null;

    const $store = {
      state,
      getters: {
        isInWishlist: () => true,
        isInCart: () => true,
      },
      dispatch: jest.fn(),
      commit: jest.fn(),
    };

    const methods = {
      scrollToTop: jest.fn(),
      toggleModal: jest.fn(),
      handleToggleModal: jest.fn(),
      openImage: jest.fn(),
    };

    const props = {
      id: 'abc',
      name: 'Product1',
      price: 3,
      images: ['https://www.google.com/'],
    };

    const wrapper = mount(DetailProduct, {
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

    await wrapper.find('img').trigger('click');

    expect(scrollToTop).toHaveBeenCalled();
  });
});
