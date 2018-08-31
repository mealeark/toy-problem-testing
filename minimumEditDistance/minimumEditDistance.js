/*
Given two strings str1 and str2 and below operations that can performed on str1. Find minimum number of edits (operations) required to convert ‘str1’ into ‘str2’.

Insert
Remove
Replace
All of the above operations are of equal cost.

Examples:

Input:   str1 = "geek", str2 = "gesek"
Output:  1
We can convert str1 into str2 by inserting a 's'.

Input:   str1 = "cat", str2 = "cut"
Output:  1
We can convert str1 into str2 by replacing 'a' with 'u'.

Input:   str1 = "sunday", str2 = "saturday"
Output:  3
Last three and first characters are same.  We basically
need to convert "un" to "atur".  This can be done using
below three operations. 
Replace 'n' with 'r', insert t, insert a
*/

/*

O: Number (min num of edits to convert str 1 -> str 2)
I: Two Strings
C: 
  Time Complexity: Linear
  Space Complexity: O(n)
E: 
  Edge Cases: None

Diagramming: 

================ LINEAR O(N) SOLUTION ====================

Input: 'geek', 'gesek'
Output: 1 (1 insert of 's')

Input: 'cat', 'cut'
Output: 1 (1 replacement of 'a' with 'u')

Input: 'sunday', 'saturday'
Output:  3 (1 replacement of 'n' with 'r', 1 insert of t, 1 insert of a)
-----------------------------------------------------------

Helper Functions:

Insert (letter2)
add letter2 after letter1

Remove (letter1)
remove letter1 so s1 === s2

Replace (letter1, letter2)
remove letter1
add letter2 in its place (can use splice)

-----------------------------------------------------------

Main Function (s1, s2):
Goal: convert s1 to look like s2

Example: 'cat', 'cut'

Keep count of edits

Iterate through s1
  'c' 'a' 't'
  compare each letter to letter in same position in s2
  'c' 'u' 't'
  if not matching
    'a' !== 'u'
    check if the letter requires
    insert 
    remove 
    replace -> 'a' replace with 'u' to make 'cut'
    Increment edits accordingly
    Edits = 1
Return edit number

-----------------------------------------------------------

Example: 'geek', 'gesek'

Keep count of edits

Iterate through s1
  'g' 'e' 'e' 'k'
  compare each letter to letter in same position in s2
  'g' 'e' 's' 'e' 'k'
  if not matching
    'e' !== 's'
    check if the letter requires
    insert -> insert 's' to make 'geek' into 'gesek'
    remove 
    replace 
    Increment edits accordingly
    Edits = 1
Return edit number

-----------------------------------------------------------

Example: 'sunday', 'saturday'

Keep count of edits

If s1 length is less than s2 length
  Iterate through s2 backwards
    'y' 'a' 'd' 'r' 'u' 't' 'a' 's'
    
    compare each letter to letter in same position in s1
    'y' 'a' 'd' 'n' 'u' 's'
    
    
    if not matching
    'n' !== 'r'
    's' !== 't' but 's' is the last letter of s2 and s1 (match)
    'a' !== undefined
    's' !== undefined but 's' is the last letter of s2 and s1 (match)

    check if the letter requires
    insert -> 
      1 insert of 't'
      1 insert of 'a'
    remove 
    replace -> 1 replacement of 'n' with 'r'

    Increment edits accordingly
    Edits = 1
Return edit number



================ OPTIMIZED SOLUTION ====================



*/

const minimumEditDistance = function(s1, s2) {
  // store minimum edit number 
  // check if s1 length is less than s2 length
    // iterate through s2 from right to left (decrement)
      // compare letters from s2 to s1 at same idx positions
      // if letters do not match
        // check if insert will make s1 === s2
          // increment edit number
        // else if remove will make s1 === s2
          // increment edit number
        // else if replace will make s1 === s2
          // increment edit number

  // else s1 length is greater than or equal to s2 length
    // iterate through s1 from left to right (increment)
      // compare letters from s1 to s2 at same idx positions
      // if letters do not match 
        // check if insert will make s1 === s2
          // increment edit number
        // else if remove will make s1 === s2
          // increment edit number
        // else if replace will make s1 === s2
          // increment edit number
  
  // return minimum edit number  
};

const insert(letter2) {

};

const remove(letter1) {

};

const replace(letter1, letter2) {

};

const assertNumberEquality = function(actual, expected, test) {
  if (actual === expected) {
    console.log(`TEST ${test} PASSED`);
  } else {
    console.log(`Test ${test} FAILED. Expected ${expected}, but got ${actual}`);
  }
};

if (window.DEBUG) {
  module.exports = minimumEditDistance;
}
  