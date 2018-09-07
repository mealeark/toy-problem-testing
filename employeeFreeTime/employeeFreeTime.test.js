import employeeFreeTime from './employeeFreeTime';

describe('employeeFreeTime', () => {
  test('is a function', () => {
    expect(employeeFreeTime).toBeInstanceOf(Function);
  });

  test('finds common leisure time intervals in small range', () => {
    expect(employeeFreeTime([[[1,2],[5,6]],[[1,3]],[[4,10]]])).toEqual([[3,4]]);
  });

  test('finds common leisure time intervals in a larger range', () => {
    expect(employeeFreeTime([[[1,3],[6,7]],[[2,4]],[[2,5],[9,12]]])).toEqual([[5,6],[7,9]]);
  });
});