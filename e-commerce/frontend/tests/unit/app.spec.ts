import { mount } from '@vue/test-utils';
import App from '@/App.vue';
import router from '@/router/index';

test('displays message', async () => {
  const wrapper = mount(App, {
    global: {
      plugins: [router],
    },
  });
  // Assert the rendered text of the component
  await expect(wrapper.text()).toContain('11');
});
