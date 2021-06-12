import { mount } from '@vue/test-utils';
import Detail from '@/views/Detail.vue';

test('displays message', () => {
  const mockedResult = {
    name: 'product1',
    images: [],
    price: 1,
    stock: 1,
    rating: {
      user: 'admin',
      rating: 1,
      comment: 'sudo',
    },
  };

  const wrapper = mount(Detail, {
    global: {
      mocks: {
        methods: {
          handleToggleModal: jest.fn(),
        },
        $store: {
          state: {
            currentProduct: {
              name: 'product1',
              images: [],
              price: 1,
              stock: 1,
              rating: {
                user: 'admin',
                rating: 1,
                comment: 'sudo',
              },
            },
          },
          getters: {
            getProductById: () => mockedResult,
            getCurrentProductRate: 5,
            isInWishlist: true,
          },
          actions: {
            fetchProductsFromApi: {},
          },
        },
      },
    },
    props: {
      id: 2,
    },
  });

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain('We have 1 in stock!');
});
