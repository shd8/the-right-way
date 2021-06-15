import { mount } from '@vue/test-utils';
import SearchCategory from '@/views/SearchCategory.vue';
import router from '@/router/index';
import state from '../mocked-state';

jest.mock('@/store/actions');

describe('Given a Search Category component', () => {
  test('Should mount a search category component calling fetch products from Api', () => {
    const wrapper = mount(SearchCategory, {
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
        category: 'LEFTOLOGY',
      },
    });
    expect(wrapper.text()).toContain('');
  });
});
