import { mount } from '@vue/test-utils';
import Detail from '@/views/Detail.vue';

test('displays message', () => {
  const wrapper = mount(Detail, {
    global: {
      mocks: {
        $store: {
          getters: {
            getCurrentProductRate: 5,
            getCurrentProduct: {
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
