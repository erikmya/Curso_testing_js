const {
  sum, mult, div,
} = require('./02-math');

describe('Test for math', () => {
  describe('tests for sum', () => {
    test('adds 1 + 3 should be 4', () => {
      const rta = sum(1, 3);
      expect(rta).toBe(4);
    });
  });
  describe('tests for multiply', () => {
    test('should be 4', () => {
      const rta = mult(1, 4);
      expect(rta).toBe(4);
    });
  });
  describe('tests for divide', () => {
    test('should divide', () => {
      const rta = div(6, 3);
      expect(rta).toBe(2);
      const rta2 = div(5, 2);
      expect(rta2).toBe(2.5);
    });
    test('should divide for zero', () => {
      const rta = div(6, 0);
      expect(rta).toBeNull();
      const rta2 = div(5, 0);
      expect(rta2).toBeNull();
    });
  });
});
