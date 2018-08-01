import addTwoNumbers from './addTwoNumbers';

describe('addTwoNumbers', () => {
  test('is a function', () => {
    expect(addTwoNumbers).toBeInstanceOf(Function);
  });

  // test('it returns true', () => {
  //   expect(addTwoNumbers(5)).toBeTruthy();
  // });
});