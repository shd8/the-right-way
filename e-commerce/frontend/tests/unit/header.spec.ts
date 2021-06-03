import { mount } from '@vue/test-utils';
import Header from '@/components/Header.vue';
// import router from '@/router/index';

test('displays message', () => {
  const wrapper = mount(Header, {
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
  expect(wrapper.text()).toContain(1);
});
