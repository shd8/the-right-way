import { mount } from '@vue/test-utils';
import App from '@/App.vue';

test('displays message', () => {
  const wrapper = mount(App, {
    global: {
      mocks: {
        $store: {
          getters: {
            getCartLength: '1',
            getWishlistLength: '1',
          },
        },
      },
    },
  });
  // Assert the rendered text of the component
  expect(wrapper.text()).toContain('11');
});
