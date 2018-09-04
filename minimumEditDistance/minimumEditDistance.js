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

Diagramming:

Goal: horse -> ros

[h, o, r, s, e]
[r, o, s]

1) h !== r 
  replace h with r
  = rorse

2) o === o

3) r !== s 
  remove r
  = rose

4) at str.length - 1 for both words
  e !== s && rose.length !== ros.length
  remove e
  = ros

5) loop through each item in str1's array to make sure it deeply equals str2's array
[r, o, s] === [r, o, s]

*/

const insert = function(letter2, s1Index, s1) {
  s1 = s1.split('')
  s1.splice(s1Index, 0, letter2);
  return s1.join('');
};

const remove = function(s1Index, s1) {
  s1 = s1.split('')
  s1.splice(s1Index, 1);
  return s1.join('');
};

const replace = function(letter2, s1Index, s1) {
  s1 = s1.split('')
  s1.splice(s1Index, 1, letter2);
  return s1.join('');
};

var minDistance = function(word1, word2) {
    
};

if (window.DEBUG) {
  module.exports = minimumEditDistance;
}
  