import { mount } from '@vue/test-utils';
import Search from '@/views/Search.vue';

test('displays message', () => {
  const wrapper = mount(Search, {
    global: {
      mocks: {
        $store: {
          disptach: jest.fn(),
          getters: {
            getProducts: [
              {
                _id: 1,
                name: 'admin',
                price: 1,
                images: [],
              },
            ],
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
