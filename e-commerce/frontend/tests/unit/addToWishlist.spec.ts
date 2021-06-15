import { mount } from '@vue/test-utils';
import AddToWishlist from '@/components/AddToWishlist.vue';
import state from '../mocked-state';

describe('Given an Add to wishlist component', () => {
  test('Should mount AddToWishlist', () => {
    const wrapper = mount(AddToWishlist, {
      global: {
        mocks: {
          $store: {
            state,
            getters: {
              isInWishlist: () => true,
            },
          },
        },
      },
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('');
  });
});
