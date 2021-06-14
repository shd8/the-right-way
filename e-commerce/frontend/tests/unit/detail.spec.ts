import { mount } from '@vue/test-utils';
import Detail from '@/views/Detail.vue';
import router from '@/router/index';

test('displays message', () => {
  const wrapper = mount(Detail, {
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
            isUserLogged: true,
            token: '',
            rightMode: false,
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
