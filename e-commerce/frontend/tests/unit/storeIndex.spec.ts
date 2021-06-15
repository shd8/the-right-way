import store from '@/store/index';

test('State call', () => {
  expect(store.state.wishlist).toEqual([]);
});
