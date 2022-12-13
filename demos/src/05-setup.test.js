describe('set', () => {
  beforeAll(() => {
    console.log('beforeAll');
    // up db
  });
  afterAll(() => {
    console.log('afterAll');
    // down db
  });

  beforeEach(() => {
    console.log('beforeEach');
  });

  afterEach(() => {
    console.log('afterEach');
  });

  test('case 1', () => {
    console.log('Soy el caso 1');
    expect(1 + 1).toBe(2);
  });
  test('case 2', () => {
    console.log('Soy el caso 2');
    expect(1 + 5).toBe(6);
  });

  describe('other group', () => {
    test('case 3', () => {
      console.log('Soy el caso 3');
      expect(1 + 1).toBe(2);
    });
    test('case 4', () => {
      console.log('Soy el caso 4');
      expect(1 + 5).toBe(6);
    });
  });
});
