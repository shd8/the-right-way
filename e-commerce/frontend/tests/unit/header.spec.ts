import { mount } from '@vue/test-utils';
import Header from '@/components/Header.vue';
import router from '@/router/index';

test('displays message', () => {
  const wrapper = mount(Header, {
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
