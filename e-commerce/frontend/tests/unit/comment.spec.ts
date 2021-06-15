import { mount } from '@vue/test-utils';
import Comment from '@/components/Comment.vue';
import state from '../mocked-state';

describe('Given an Comment component', () => {
  test('Should mount comment component', () => {
    const wrapper = mount(Comment, {
      props: {
        user: 'Admin',
        rating: 3,
        comment: 'Sudo',
      },
      global: {
        mocks: {
          $store: {
            state,
            getters: {
              isInCart: () => true,
            },
          },
        },
      },
    });
    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('Admin3Sudo');
  });
});
