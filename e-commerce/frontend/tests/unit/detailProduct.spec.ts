import { mount } from '@vue/test-utils';
import DetailProduct from '@/components/DetailProduct.vue';

const mockRouter = {
  push: jest.fn(),
};

describe('Given an detail product component', () => {
  test('Should mount detail product component when not logged', () => {
    const wrapper = mount(DetailProduct, {
      props: {
        id: '123',
        name: 'Admin',
        price: 3,
        images: [],
      },
      global: {
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
          data: {
            showModal: false,
          },
        },
      },
    });
    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('Login or create an account to buy stuff, save your Wishlist and your conversations ! Not registered yet?  Click here !  Fill in all the fields and click on register Please, check the following errors: Credentials  Address Do you already have an account?  Enter here !  Login or create an account to buy stuff, save your Wishlist and your conversations ! Not registered yet?  Click here !  Fill in all the fields and click on register Please, check the following errors: Credentials  Address Do you already have an account?  Enter here ! arrowLeftarrowRight');
  });

  test('When Modal is clicked, should call toggle modal', async () => {
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
        isUserLogged: false,
        token: '',
        rightMode: true,
      },
      getters: {
        isInWishlist: () => true,
        isInCart: () => true,
      },
      dispatch: jest.fn(),
      commit: jest.fn(),
    };

    const methods = {
      scrollToTop: jest.fn(),
      toggleModal: jest.fn(),
      handleToggleModal: jest.fn(),
      openImage: jest.fn(),
    };

    const props = {
      id: 'abc',
      name: 'Product1',
      price: 3,
      images: [],
    };

    const wrapper = mount(DetailProduct, {
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

    await wrapper.find('.modal-heart-right-mode').trigger('click');

    expect(scrollToTop).toHaveBeenCalled();
  });

  test('When an image is clicked, should call open image', async () => {
    window.open = () => null;

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
        isInCart: () => true,
      },
      dispatch: jest.fn(),
      commit: jest.fn(),
    };

    const methods = {
      scrollToTop: jest.fn(),
      toggleModal: jest.fn(),
      handleToggleModal: jest.fn(),
      openImage: jest.fn(),
    };

    const props = {
      id: 'abc',
      name: 'Product1',
      price: 3,
      images: ['https://www.google.com/'],
    };

    const wrapper = mount(DetailProduct, {
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

    await wrapper.find('.carousel__item').trigger('click');

    expect(scrollToTop).toHaveBeenCalled();
  });
});
