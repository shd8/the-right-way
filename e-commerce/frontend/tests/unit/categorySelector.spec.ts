import { mount } from '@vue/test-utils';
import CategorySelector from '@/components/CartProduct.vue';
import router from '@/router/index';

const mockRouter = {
  push: jest.fn(),
};

describe('Given a category selector', () => {
  test('Should mount a category selector component', () => {
    const wrapper = mount(CategorySelector, {
      props: {
        id: '1',
        name: 'Product1',
        price: 3,
        images: [],
      },
      global: {
        plugins: [router],
        mocks: {
          $router: {
            push: jest.fn(),
          },
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

    expect(wrapper.text()).toContain('');
  });

  test('When link is clicked, should call scroll to top', async () => {
    const $store = {
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
        rightMode: true,
      },
      getters: {
        isInWishlist: () => true,
      },
      dispatch: jest.fn(),
      commit: jest.fn(),
    };

    const methods = {
      scrollToTop: jest.fn(),
    };

    const props = {
      id: 'abc',
      name: 'Product1',
      price: 3,
      images: [],
    };

    const wrapper = mount(CategorySelector, {
      props,
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

    await wrapper.findAll('router-link')[0].trigger('click');

    expect(scrollToTop).toHaveBeenCalled();
  });
});
