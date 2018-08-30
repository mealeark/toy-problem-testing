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

Keep storage of str1 letters and their counts (even count denotes a match)
letters = {'g': 1, 'e': 2, 'k': 1}

Iterate through str2 letters to check which letters are already stored, incrementing those
If not stored already, add a new letter with a new count

str 2 iteration 0
'g'
Found in letters storage, so storage at 'g' increments
letters = {'g': 2, 'e': 2, 'k': 1}

str 2 iteration 1
'e'
Found in letters storage, so storage at 'e' increments
letters = {'g': 2, 'e': 3, 'k': 1}

str 2 iteration 2
's'
NOT found in letters storage, so add 's' to storage
letters = {'g': 2, 'e': 3, 'k': 1, 's': 1}

str 2 iteration 3
'e'
Found in letters storage, so storage at 'e' increments
letters = {'g': 2, 'e': 4, 'k': 1, 's': 1}

str 2 iteration 4
'k'
Found in letters storage, so storage at 'k' increments
letters = {'g': 2, 'e': 4, 'k': 2, 's': 1}


Iterate through values of letters storage
If the value is odd, increment the count of edits

Number of odd values in letters storage:
'g': 2 -> even
'e': 4 -> even
'k': 2 -> even
's': 1 -> ODD

Total edits: 1

================ OPTIMIZED SOLUTION ====================



*/

let minimumEditDistance = function(s1, s2) {
  // store edit number
  let minimumEdits = 0;
  // store letter counts
  let letterStorage = {};

  // iterate through str1 letters to add letter and count to storage
  for (let i = 0; i < s1.length; i++) {
    let element1 = s1[i];
    letterStorage[element1] = (letterStorage[element1] || 0) + 1;
  }
  
  // iterate through str 2 letters to check if letter is found in storage
  for (let i = 0; i < s2.length; i++) {
    let element2 = s2[i];
    // if letter is in storage, increment its count
    if (letterStorage[element2]) {
      letterStorage[element2]++;
    } else {
      // else, add new letter to storage with starting count of 1
      letterStorage[element2] = (letterStorage[element2] || 0) + 1;
    }
  }

  console.log('stored ', letterStorage)
    
  // loop through storage
  for (let letter in letterStorage) {
     // if value (letter count) is odd, increment edit number
     if (letterStorage[letter] % 2 !== 0) {
       minimumEdits++;
     }
  }
   
  // return edit number
  return minimumEdits;
};

console.log('Min edit dist ', minimumEditDistance('cat', 'cut'));

// if (window.DEBUG) {
//   module.exports = minimumEditDistance;
// }
  