import { mount } from '@vue/test-utils';
import Wishlist from '@/views/Wishlist.vue';

test('displays message', () => {
  const wrapper = mount(Wishlist);

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain('Wishlist works');
});
