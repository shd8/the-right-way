import { mount } from '@vue/test-utils';
import SearchCategory from '@/views/SearchCategory.vue';

test.only('displays message', () => {
  const wrapper = mount(SearchCategory, {
    global: {
      mocks: {
        $store: {
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
        $route: {
          params: {
            id: '3',
          },
        },
      },
    },
    props: {
      category: 'LEFTOLOGY',
    },
  });

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain('We have 1 in stock!');
});
