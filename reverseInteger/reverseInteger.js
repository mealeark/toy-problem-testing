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
     constraint: 32-bit-integer limit (2,147,483,647)
E: cases:
     if output begins with zero, remove the zero
     if input is negative num, make sure output is also neg

Diagramming:

Input: -1230
Output: -321

1) stringify and reverse num
'0321-'

2) while there is a zero in front, remove it
'321-'

3) if last char is '-' move it to the front
'-321'

4) return finished product as a num
-321

*/

const reverseInteger = function(x) {
  let copy = String(x).slice();
  let reversed = copy.split('').reverse();

  if (reversed[reversed.length - 1] === '-') {
    let negativeSign = reversed.pop();
    reversed.unshift(negativeSign);
  }

  let result = Number(reversed.join(''));
  
  if (result > -2147483647 && result < 2147483647) {
    return result;
  } else {
    return 0;
  }
};

if (window.DEBUG) {
  module.exports = reverseInteger;
}
