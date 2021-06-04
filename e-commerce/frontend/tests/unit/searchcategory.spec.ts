import { mount } from '@vue/test-utils';
import SearchCategory from '@/views/SearchCategory.vue';

test('displays message', () => {
  const wrapper = mount(SearchCategory, {
    global: {
      mocks: {
        $store: {
          getters: {
            getProductsByCategory: [
              {
                _id: 1,
                name: 'admin',
                price: 1,
                images: [],
                category: 'ONE',
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
