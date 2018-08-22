import reverseInteger from './reverseInteger';

describe('reverseInteger', () => {
  test('is a function', () => {
    expect(reverseInteger).toBeInstanceOf(Function);
  });

  test('it returns the integer reversed', () => {
    expect(reverseInteger(123)).toEqual(321);
    expect(reverseInteger(-123)).toEqual(-321);
    expect(reverseInteger(120)).toEqual(21);
  });

  test('it returns a number', () => {
    expect(reverseInteger(1200)).toEqual(21);
  });

  test('it returns 0 for a result within the 32-bit signed integer range', () => {
    expect(reverseInteger(2147483648)).toEqual(0);
  });
});