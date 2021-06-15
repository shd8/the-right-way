import { mount } from '@vue/test-utils';
import AddToCart from '@/components/AddToCart.vue';
import state from '../mocked-state';

describe('Given an Add to cart component', () => {
  test('Should mount AddToCart', () => {
    const wrapper = mount(AddToCart, {
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
    expect(wrapper.text()).toContain('');
    // Assert the rendered text of the component
  });
});
