import minimumEditDistance from './minimumEditDistance';

describe('minimumEditDistance', () => {
  test('is a function', () => {
    expect(minimumEditDistance).toBeInstanceOf(Function);
  });

  test('returns a minimum edit of 3 for "horse" and "ros"', () => {
    expect(minimumEditDistance("horse", "ros")).toEqual(3);
  });

  test('returns a minimum edit of 5 for "intention" and "execution"', () => {
    expect(minimumEditDistance("intention", "execution")).toEqual(5);
  });
});