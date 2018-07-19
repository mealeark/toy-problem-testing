/**
 * Write a function that rotates a NxN matrix 90 degrees.
 *
 * A matrix, also called a 2-D array, is simply an array of arrays of values.
 *
 * Example 1x1 matrix:
 *   [ [1] ]
 *
 * Example 2x2 matrix:
 *  [ [1,2],
 *    [3,4] ]
 *
 * Important note:
 *   In mathematics, and generally in CS, matrices are identified as m-by-n, where m is
 *   the number of *rows* and n is the number of *columns*. So an [i][j] address in a matrix
 *   will be i places down, and j places over. This usually matches the way arrays are
 *   addressed in code, but keep in mind that it differs from use in geometry and computer
 *   graphics, where coordinates of the form (x,y) are usually x units over, and y units down.
 *
 * Example rotation of a 4x4 matrix:
 *
 * var matrix = [
 *  [1,2,3,4],
 *  [5,6,7,8],
 *  [9,'A','B','C'],
 *  ['D','E','F','G']
 * ];
 * matrix[0][0]; // 1
 * matrix[3][2]; // 'F'
 *
 * var rotatedMatrix = rotateMatrix(matrix); // Rotate 90 degrees clockwise
 * // rotatedMatrix is:
 * [ ['D',9,5,1],
 *  ['E','A',6,2],
 *  ['F','B',7,3],
 *  ['G','C',8,4]
 * ]
 * rotatedMatrix[0][0]; // 'D'
 * rotatedMatrix[3][2]; // 8
 *
 * Extra credit:
 *  - Make your function operate on rectangular matrices (MxN rather than NxN).
 *  - Make your function accept a parameter for the direction of rotation (1 = clockwise, -1 = counterclockwise)
 */

// O: matrix (array of arrays) rotated 90 degrees clockwise
// I: matrix (array of arrays)
// C: none
// E: rectangular matrices, account for counterclockwise rotation

/*
Diagramming:
  Input:
  [
    [1,2],
    [3,4]
  ]

  Output:
  [
    [3,1],
    [4,2]
  ]

  last row --> became first col
  first row --> became last col

*/

const rotateMatrix = function (matrix) {
  // store new matrix
  const rotated = [];

  // define first row
  const firstRow = matrix[0];

  // add first row items as last col in new matrix
  for (let i = 0; i < firstRow.length; i++) {
    rotated.push([firstRow[i]]);
  }

  // add last rows items (everything except for first row)
  const copy = matrix.slice();
  const lastRows = copy.splice(1);
  for (let i = 0; i < lastRows.length; i++) {
    for (let j = 0; j < lastRows[i].length; j++) {
      const item = lastRows[i][j];
      const rotatedSubarray = rotated[j];
      rotatedSubarray.unshift(item);
    }
  }

  // return new matrix
  return rotated;
};

if (window.DEBUG) {
  module.exports = rotateMatrix;
}
