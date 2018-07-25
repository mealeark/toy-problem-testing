import primeTester from './primeTester';
import primeSieve from './primeTester';

describe('primeTester', () => {
  test('is a function', () => {
    expect(primeTester).toBeInstanceOf(Function);
  });

  test('it returns true', () => {
    expect(primeTester(5)).toBeTruthy();
  });
});

describe('primeSieve', () => {
  test('prime sieve returns a list of all prime numbers in a user-specified range (inclusive)', () => {
    expect(primeSieve(10, 30)).toEqual(
      [11, 13, 17, 19, 23, 29],
    );
  });
});
