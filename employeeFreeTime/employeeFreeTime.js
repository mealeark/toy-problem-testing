/*
We are given a list schedule of employees, which represents the working time for each employee.

Each employee has a list of non-overlapping Intervals, and these intervals are in sorted order.

Return the list of finite intervals representing common, positive-length free time for all employees, also in sorted order.

Example 1:
Input: schedule = [[[1,2],[5,6]],[[1,3]],[[4,10]]]
Output: [[3,4]]
Explanation:
There are a total of three employees, and all common
free time intervals would be [-inf, 1], [3, 4], [10, inf].
We discard any intervals that contain inf as they aren't finite.
Example 2:
Input: schedule = [[[1,3],[6,7]],[[2,4]],[[2,5],[9,12]]]
Output: [[5,6],[7,9]]
(Even though we are representing Intervals in the form [x, y], the objects inside are Intervals, not lists or arrays. For example, schedule[0][0].start = 1, schedule[0][0].end = 2, and schedule[0][0][0] is not defined.)

Also, we wouldn't include intervals like [5, 5] in our answer, as they have zero length.

Note:

schedule and schedule[i] are lists with lengths in range [1, 50].
0 <= schedule[i].start < schedule[i].end <= 10^8.
*/

/*
Requirements

Ouput: Array of arrays (list of time intervals)
Input: Array of arrays which can consist of multiple interval tuples each
Edge Cases: 
- Discard any intervals that contain inf as they aren't finite.

----------------
Ideas

Creating a range based off the tuple intervals

Example 1:
schedule = [
              [ [1,2],[5,6] ],
              [ [1,3] ],
              [ [4,10] ]
           ]
           
HOURS ARE EXCLUSIVE OF END NUM IN INTERVAL

Employee 1:
[1,2]           [5,6]
1                5

Employee 2:
[1,3]
1 - 2


Employee 3:
[4,10]
4 - 5 - 6 - 7 - 8 - 9

Minimum of all employees' hours
Min: 1

Maximum of all employees' hours
Max: 10

Range from min to max:
1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9 - 10

Find missing number 
Missing: 3
If only one hour missing, add interval of one hour from the missing value 
[3,4]

Output: [ [3,4] ]

===========================================================================

Example 2: 
schedule = [
              [ [1,3],[6,7] ],
              [ [2,4] ] ,
              [ [2,5],[9,12] ]
          ]
        
HOURS ARE EXCLUSIVE OF END NUM IN INTERVAL

Employee 1:
[1,3]           [6,7]
1 - 2            6

Employee 2:
[2,4]
2 - 3


Employee 3:
[2,5]              [9,12]
2 - 3 - 4          9 - 10 - 11

Minimum of all employees' hours
Min: 1

Maximum of all employees' hours
Max: 11

Range from min to max:
1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9 - 10 - 11

Find missing number 
Missing: 5, 7, 8
If only one hour missing, add interval of one hour from the missing value 
[3,4]
If hours missing are consecutive, take the min to add to tuple and take the max + 1 to be the end of the tuple

Output: [ 
          [5,6],
          [7,9] 
        ]



----------------
Analysis

Complexities: O(N^2) time to iterate through the subarrays, and O(N) space to store all employees' hours range

----------------
Code

----------------
Test

----------------
*/

let employeeFreeTime = function(schedule) {
  // store result array


  // make copy of schedule

  // store employee hours worked in a set
  // store missing hours

  // store min value of range
  // store max value of range
  // store all nums within range

  // create range of all poss hours worked through flattening all subarrays (of copy) into one large array
      // sort the large array
      // grab minimum value
      // grab max value 

  // iterate from min to max value 
      // add each value into an array of consecutive nums 

  // iterate through orig schedule
      // for each employee's schedule (subarray), iterate through the items
      // add employee numbers to set to remove duplicate hours

  // iterate through set of employees' hours and check if included in array of all poss nums
      // if not included, add value to missing hours array

  // sort missing hours array
  // loop through missing hours
      // if hours aren't consecutive, add curr num to result array in a tuple with its next value
      // if hours are consecutive, take the min to add to tuple and take the max + 1 to be the end of the tuple

  // return results array
};

let assertArraysEqual = function(actual, expected, testName) {
  if ( actual.length === expected.length && actual.every(function(elem, idx) {return elem === expected[idx]}) ) {
      console.log(`Test ${testName} PASSED!`);
  } else {
      console.log(`Test ${testName} FAILED. Expected ${expected}, but got ${actual}`);
  }
};

if (window.DEBUG) {
    module.exports = employeeFreeTime;
}