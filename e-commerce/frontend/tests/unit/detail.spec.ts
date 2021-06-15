import { mount } from '@vue/test-utils';
import Detail from '@/views/Detail.vue';
import router from '@/router/index';
import state from '../mocked-state';

test('Should render a detail component', () => {
  const wrapper = mount(Detail, {
    global: {
      plugins: [router],
      mocks: {
        $store: {
          state: {
            ...state,
            isUserLogged: true,
          },
          getters: {
            isInWishlist: () => true,
            isInCart: () => true,
            isUserLogged: () => true,
            getProductById: () => '',
            getCurrentProductRate: 2,
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
  expect(wrapper.text()).toContain('productA$ 02We have 0 in stock!one1comment onetwo2comment two');
});
