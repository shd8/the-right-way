import { mount } from '@vue/test-utils';
import Profile from '@/views/Profile.vue';

test('displays message', () => {
  const wrapper = mount(Profile);

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain('Profile works');
});
