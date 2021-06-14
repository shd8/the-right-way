import { mount } from '@vue/test-utils';
import SearchCategory from '@/views/SearchCategory.vue';
import actions from '@/store/actions';
import router from '@/router/index';

jest.mock('@/store/actions');

describe('Given a Search Category component', () => {
  test('Should mount a search category component calling fetch products from Api', () => {
    const wrapper = mount(SearchCategory, {
      global: {
        plugins: [router],
        mocks: {
          $store: {
            state: {
              wishlist: ['abcd123'],
              cart: ['abcd123', 'abcd321'],
              products: [
                {
                  _id: 'abcd123',
                  name: 'product1',
                  category: 'LEFTICIANS',
                  price: 5,
                  stock: 0,
                  images: [],
                  ratings: [
                    {
                      user: 'one',
                      rating: 1,
                      comment: 'comment one',
                    },
                    {
                      user: 'two',
                      rating: 2,
                      comment: 'comment two',
                    },
                  ],
                },
                {
                  _id: 'abcd321',
                  name: 'product2',
                  category: 'OFFICE',
                  price: 0,
                  stock: 0,
                  images: [],
                  ratings: [],
                },
              ],
              currentProduct: {
                _id: '',
                name: 'productA',
                category: '',
                price: 0,
                stock: 0,
                images: [],
                ratings: [{
                  user: 'one',
                  rating: 1,
                  comment: 'comment one',
                },
                {
                  user: 'two',
                  rating: 2,
                  comment: 'comment two',
                },
                ],
              },
              currentUser: {
                _id: '',
                username: '',
                email: '',
                password: '',
                address: {
                  country: '',
                  city: '',
                  street: '',
                  postalCode: '',
                },
              },
              isUserLogged: false,
              token: '',
              rightMode: false,
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
          },
        },
      },
      props: {
        category: 'LEFTOLOGY',
      },
    });
    expect(actions.fetchProductsFromApi).toHaveBeenCalled();
    expect(wrapper.text()).toContain('');
  });
});
