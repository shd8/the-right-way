import { mount } from '@vue/test-utils';
import Search from '@/views/Search.vue';
import router from '@/router/index';

test('displays message', () => {
  const wrapper = mount(Search, {
    global: {
      plugins: [router],
      mocks: {
        $store: {
          disptach: jest.fn(),
          state: {
            products: [
              {
                _id: 1,
                name: 'admin',
                price: 1,
                images: [],
              },
            ],
          },
          getters: {
            isInWishlist: true,
          },
          actions: {
            fetchProductsFromApi: jest.fn(),
          },
        },
        methods: {
          mapActions: jest.fn(),
        },
        mounted: {
          fetchProductsFromApi: jest.fn(),
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
