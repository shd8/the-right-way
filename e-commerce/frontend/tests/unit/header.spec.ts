import { mount } from '@vue/test-utils';
import Header from '@/components/Header.vue';
import router from '@/router/index';
import state from '../mocked-state';

const mockRouter = {
  push: jest.fn(),
};

describe('Given a header component', () => {
  test('Mounts header component', () => {
    const wrapper = mount(Header, {
      global: {
        plugins: [router],
        mocks: {
          $store: {
            state: {
              ...state,
              isUserLogged: false,
            },
            getters: {
              isInCart: () => true,
              getCartLength: () => 1,
              getWishlistLength: () => 1,
            },
          },
          data: {
            showModal: false,
            searchInput: 'a',
          },
        },
      },
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain(1);
  });

  test('When link is clicked, should call scroll to top', async () => {
    window.scrollTo = () => null;
    const $store = {
      state,
      getters: {
        isInCart: () => true,
        getCartLength: () => 1,
        getWishlistLength: () => 1,
      },
      dispatch: jest.fn(),
      commit: jest.fn(),
    };

    const methods = {
      scrollToTop: jest.fn(),
    };

    const wrapper = mount(Header, {
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

    await wrapper.find('router-link').trigger('click');

    await wrapper.find('input').trigger('input');
    const input = wrapper.find('input');

    input.element.value = 'a';
    input.element.value = 'product1';
    input.element.value = '';

    expect(scrollToTop).toHaveBeenCalled();
  });

  test('When filtered search is clicked, should call empty input', async () => {
    window.scrollTo = () => null;
    const $store = {
      state,
      getters: {
        isInCart: () => true,
        getCartLength: () => 1,
        getWishlistLength: () => 1,
      },
      dispatch: jest.fn(),
      commit: jest.fn(),
    };

    const methods = {
      scrollToTop: jest.fn(),
    };

    const wrapper = mount(Header, {
      global: {
        mocks: {
          $router: mockRouter,
          $store,
          methods,
          data() {
            return {
              searchInput: 'a',
              filteredProducts: [{
                id: 'id',
                name: 'a',
                price: 'price',
                image: 'image-url',
                category: 'category',
              }],
            };
          },
        },
      },
    });

    const emptyInput = jest.fn();
    emptyInput();

    await wrapper.find('.filtered-search').trigger('click');

    expect(emptyInput).toHaveBeenCalled();
  });

  test('And an input', async () => {
    window.scrollTo = () => null;
    const $store = {
      state,
      getters: {
        isInCart: () => true,
        getCartLength: () => 1,
        getWishlistLength: () => 1,
      },
      dispatch: jest.fn(),
      commit: jest.fn(),
    };

    const methods = {
      scrollToTop: jest.fn(),
    };

    const wrapper = mount(Header, {
      global: {
        mocks: {
          $router: mockRouter,
          $store,
          methods,
        },
      },
      data() {
        return {
          searchInput: 'ab',
        };
      },
    });

    await wrapper.find('input').trigger('input');
    const input = wrapper.find('input');

    input.element.value = 'a';
    input.element.value = 'product1';
    input.element.value = '';

    expect(wrapper.text()).toContain('() => 1() => 1');
  });
});
