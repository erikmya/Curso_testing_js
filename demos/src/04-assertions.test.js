// matchers
test('test obj', () => {
  const data = { name: 'erik' };
  data.lastname = 'maya';
  expect(data).toEqual({ name: 'erik', lastname: 'maya' });
});

test('test obj', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('booleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

test('strings', () => {
  expect('Emma').toMatch(/ma/);
});

test('list / arrays', () => {
  const numbers = [1, 2, 3, 4];
  expect(numbers).toContain(3);
});
