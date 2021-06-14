import { mount } from '@vue/test-utils';
import CartProduct from '@/components/CartProduct.vue';
import router from '@/router/index';
import actions from '@/store/actions';

jest.mock('@/store/actions');

describe('Given an Cart Product component', () => {
  test('Should mount Cart Product', () => {
    const wrapper = mount(CartProduct, {
      props: {
        id: '1',
        name: 'Product1',
        price: 3,
        images: [],
      },
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
            },
          },
        },
      },
    });
    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('');
  });

  test('When trash button is clicked, should call action retrieve from User Cart', () => {
    const wrapper = mount(CartProduct, {
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
              isInWishlist: () => true,
            },
            actions: {
              retrieveFromUserCart: jest.fn(),
            },
            dispatch: jest.fn(),
          },
        },
      },
    });

    wrapper.find('.trash').trigger('click');

    expect(actions.retrieveFromUserCart).toHaveBeenCalled();
  });
});
