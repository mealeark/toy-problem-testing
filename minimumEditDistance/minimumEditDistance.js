/*
Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.

You have the following 3 operations permitted on a word:

Insert a character
Delete a character
Replace a character

Example 1:

Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation: 
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')

Example 2:

Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation: 
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')
*/

/*
Input: string1 and string2
Output: number (min num to convert str1 -> str2)
Complexities: 
Edge Cases: 
  - if str1 is empty, copy all letters of str2
  - if str2 is empty, remove all letters of str1

Diagramming:

    #  r  o  s
# [ 0, 1, 2, 3 ]
h [ 1, 1, 2, 3 ]
o [ 2, 2, 1, 2 ]
r [ 3, 2, 2, 2 ]
s [ 4, 3, 3, 2 ]
e [ 5, 4, 4, 3 ]

*/

var minDistance = function(str1, str2) {
  //  If str1 is empty, insert all characters of str2 
  if (str1.length == 0) return str2.length; 
  // If str2 is empty, only remove all characters of str1
  if (str2.length == 0) return str1.length; 

  const matrix = [];
  
  // increment across rows and columns
  for (let r = 0; r <= str1.length; r++) {
    // add each row
    matrix[r] = [];
    for (let c = 0; c <= str2.length; c++) {
      // for first row, add column numbers
      if (r === 0) {
        matrix[r][c] = c;
      } else if (c === 0) {
        // for first column, add row numbers
        matrix[r][c] = r;
      // if last letter in str1 equals last letter in str2
      } else if (str1[r - 1] === str2[c - 1]) {
        // set current cell to value of last row, last col
        matrix[r][c] = matrix[r - 1][c - 1];
      } else {
        // set current cell to the minimum number from 3 diff edit choices
        console.log('insert ', matrix[r][c - 1] + 1)
        console.log('replace ', matrix[r - 1][c - 1] + 1)
        console.log('remove ', matrix[r - 1][c] + 1)

        matrix[r][c] = Math.min(
          matrix[r][c - 1] + 1, // insertion
          matrix[r - 1][c - 1] + 1, // substitution
          matrix[r - 1][c] + 1 // deletion
         );
      }
    }
  }
  
  matrix.forEach(row => console.log(row));
  // return the bottom, far right cell, representing the number of min edits
  return matrix[str1.length][str2.length];
};

if (window.DEBUG) {
  module.exports = minimumEditDistance;
}
  