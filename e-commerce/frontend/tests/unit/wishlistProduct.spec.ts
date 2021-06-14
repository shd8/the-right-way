import { mount } from '@vue/test-utils';
import WishlistProduct from '@/components/WishlistProduct.vue';
import router from '@/router/index';

const mockRouter = {
  push: jest.fn(),
};
describe('Given a Wishlist Product component', () => {
  test('Should mount Wishlist Product', async () => {
    window.scrollTo = () => null;

    const wrapper = mount(WishlistProduct, {
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
            },
          },
        },
      },
    });

    const scrollToTop = jest.fn();
    scrollToTop();

    await wrapper.find('router-link').trigger('click');

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('');
  });
});
