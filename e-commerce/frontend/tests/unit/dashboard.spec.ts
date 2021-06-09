import { mount } from '@vue/test-utils';
import Dashboard from '@/views/Dashboard.vue';
import router from '@/router/index';

test('displays message', async () => {
  const wrapper = mount(Dashboard, {
    global: {
      plugins: [router],
      mocks: {
        $store: {
          actions: {
            fetchProductsFromApi: {},
          },
        },
      },
    },
  });

  // Assert the rendered text of the component
  await expect(wrapper.text()).toContain('Select a category to start looking products');
});
