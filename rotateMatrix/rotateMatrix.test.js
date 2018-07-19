import rotateMatrix from './rotateMatrix';

describe('rotateMatrix', () => {
  test('is a function', () => {
    expect(rotateMatrix).toBeInstanceOf(Function);
  });

  test('it returns an array', () => {
    expect(rotateMatrix(
      [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 'A', 'B', 'C'],
        ['D', 'E', 'F', 'G'],
      ],
    )).toBeInstanceOf(Array);
  });

  test('it rotates a NxN matrix 90 degrees clockwise', () => {
    expect(rotateMatrix(
      [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 'A', 'B', 'C'],
        ['D', 'E', 'F', 'G'],
      ],
    )).toEqual(
      [
        ['D', 9, 5, 1],
        ['E', 'A', 6, 2],
        ['F', 'B', 7, 3],
        ['G', 'C', 8, 4],
      ],
    );
    expect(rotateMatrix(
      [
        [1, 2],
        [3, 4],
      ],
    )).toEqual(
      [
        [3, 1],
        [4, 2],
      ],
    );
  });

  // test('it handles no possible sums to zero', () => {
  //   expect(rotateMatrix([-1, 2, 3])).toEqual([]);
  // });
});
