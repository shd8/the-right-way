import { mount } from '@vue/test-utils';
import Comment from '@/components/Comment.vue';
// import router from '@/router/index';

test('displays message', () => {
  const wrapper = mount(Comment, {
    props: {
      user: 'admin',
      rating: 5,
      comment: 'sudo',
    },
  });

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain('admin5sudo');
});
