import { add } from '.';

describe('四則演算', () => {
  describe('add', () => {
    test('1 + 1 は 2', () => {
      expect(add(1, 1)).toBe(2);
    });
    test('1 + 2 は 3', () => {
      expect(add(1, 2)).toBe(3);
    });
  });
});
