import { mount } from '@vue/test-utils';
import App from '@/App.vue';
import router from '@/router/index';
import state from '../mocked-state';

test('displays message', () => {
  const wrapper = mount(App, {
    global: {
      plugins: [router],
      mocks: {
        $store: {
          state,
          getters: {
            getCartLength: 2,
            getWishlistLength: 2,
          },
        },
      },
    },
  });
  // Assert the rendered text of the component
  expect(wrapper.text()).toContain('2Right modeLefty mode');
});
