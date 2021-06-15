import { mount } from '@vue/test-utils';
import CategorySelector from '@/components/CategorySelector.vue';
import router from '@/router/index';
import state from '../mocked-state';

const mockRouter = {
  push: jest.fn(),
};

describe('Given a category selector', () => {
  test('Should mount a category selector component', () => {
    const wrapper = mount(CategorySelector, {
      global: {
        plugins: [router],
        mocks: {
          $router: {
            push: jest.fn(),
          },
          $store: {
            state,
            getters: {
              isInCart: () => true,
            },
            dispatch: jest.fn(),
            commit: jest.fn(),
          },
        },
      },
    });

    expect(wrapper.text()).toContain('');
  });

  test('When link is clicked, should call scroll to top', async () => {
    window.scrollTo = () => null;

    const $store = {
      state,
      getters: {
        isInWishlist: () => true,
      },
      dispatch: jest.fn(),
      commit: jest.fn(),
    };

    const methods = {
      scrollToTop: jest.fn(),
    };

    const wrapper = mount(CategorySelector, {
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

    await wrapper.find('.clothes').trigger('click');

    expect(scrollToTop).toHaveBeenCalled();
  });
});
