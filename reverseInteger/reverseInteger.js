/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

O: reversed number
I: number
C: linear
     constraint: 32-bit-integer limit
E: cases:
     if output begins with zero, remove the zero
     if input is negative num, make sure output is also neg

Diagramming: 
*/
 
const reverse = function(x) {
 
};

if (window.DEBUG) {
  module.exports = reverse;   
}