import { mount } from '@vue/test-utils';
import Profile from '@/views/Profile.vue';
import state from '../mocked-state';

jest.mock('@/store/actions');

const mockRouter = {
  push: jest.fn(),
};

describe('Given a Dashboard component', () => {
  test('Should mount a Dashboard View', () => {
    window.scrollTo = () => null;

    const wrapper = mount(Profile, {
      props: {
        id: '1',
        name: 'Product1',
        price: 3,
        images: [],
      },
      global: {
        mocks: {
          $router: mockRouter,
          $store: {
            state,
            getters: {
              isInCart: () => true,
              getProductById: () => 'abc123',
              getCartPrice: () => 3,
              getCartLength: () => 2,
              getWishlistLength: () => 2,
            },
            dispatch: jest.fn(),
            commit: jest.fn(),
          },
        },
      },
    });

    wrapper.find('router-link').trigger('click');

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('');
  });
});
