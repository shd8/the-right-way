import mutations from '@/store/mutations';

test('Count increaser', () => {
  const state = { count: 1 };
  mutations.increaseOne(state);

  expect(state.count).toBe(2);
});

test('Count decreaser', () => {
  const state = { count: 1 };
  mutations.decreaseOne(state);

  expect(state.count).toBe(0);
});

test('Update products', () => {
  const state = {
    products: [
      { name: 'product1' },
      { name: 'product2' },
    ],
  };
  const payload = [
    { name: 'product3' },
    { name: 'product4' },
  ];
  mutations.updateProducts(state, payload);

  expect(state.products).toStrictEqual([
    { name: 'product3' },
    { name: 'product4' },
  ]);
});

test('Update products', () => {
  const state = {
    currentProduct: { name: 'product1' },
  };

  const payload = { name: 'product2' };

  mutations.updateCurrentProduct(state, payload);

  expect(state.currentProduct).toEqual(
    { name: 'product2' },
  );
});
