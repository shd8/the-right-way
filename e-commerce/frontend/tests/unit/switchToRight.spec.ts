import { mount } from '@vue/test-utils';
import SwitchToRight from '@/components/SwitchToRight.vue';
import state from '../mocked-state';

describe('Given switch to right component', () => {
  test('Should mount a switch to right component', () => {
    const wrapper = mount(SwitchToRight, {
      global: {
        mocks: {
          $store: {
            state: {
              ...state,
              isUserLogged: false,
            },
            getters: {
              isInWishlist: () => true,
            },
            dispatch: jest.fn(),
            commit: jest.fn(),
          },
        },
      },
    });

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('');
  });
});
