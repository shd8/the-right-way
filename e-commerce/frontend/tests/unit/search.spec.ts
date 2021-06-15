import { mount } from '@vue/test-utils';
import Search from '@/views/Search.vue';
import router from '@/router/index';
import state from '../mocked-state';

test('Renders Search view', () => {
  const wrapper = mount(Search, {
    global: {
      plugins: [router],
      mocks: {
        $store: {
          state,
          getters: {
            isInWishlist: () => true,
            isInCart: () => true,
            isUserLogged: () => true,
            getProductsByCategory: () => [
              {
                _id: 1,
                name: 'admin',
                price: 1,
                images: [],
                category: 'LEFTOLOGY',
              },
            ],
          },
          actions: {
            fetchProductFromApi: jest.fn(),
          },
          dispatch: jest.fn(),
          commit: jest.fn(),
        },
      },
    },
    props: {
      id: 2,
    },
  });

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain('All our productsproduct1$ 5product2$ 0');
});
