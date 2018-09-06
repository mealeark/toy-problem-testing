import employeeFreeTime from './employeeFreeTime';

describe('employeeFreeTime', () => {
  test('is a function', () => {
    expect(employeeFreeTime).toBeInstanceOf(Function);
  });

  test('returns a minimum edit of 3 for "horse" and "ros"', () => {
    expect(employeeFreeTime("horse", "ros")).toEqual(3);
  });

  test('returns a minimum edit of 5 for "intention" and "execution"', () => {
    expect(employeeFreeTime("intention", "execution")).toEqual(5);
  });
});