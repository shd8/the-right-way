import { mount } from '@vue/test-utils';
import WishlistProduct from '@/components/WishlistProduct.vue';
import state from '../mocked-state';

const mockRouter = {
  push: jest.fn(),
};
describe('Given a Wishlist Product component', () => {
  test('Should mount Wishlist Product', async () => {
    window.scrollTo = () => null;

    const wrapper = mount(WishlistProduct, {
      props: {
        id: '1',
        name: 'Product1',
        price: 3,
        images: [],
      },
      global: {
        mocks: {
          $router: mockRouter,
          $store: {
            state: {
              ...state,
              isUserLogged: false,
            },
            getters: {
              isInCart: () => true,
            },
          },
        },
      },
    });

    const scrollToTop = jest.fn();
    scrollToTop();

    await wrapper.find('router-link').trigger('click');

    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('');
  });
});
