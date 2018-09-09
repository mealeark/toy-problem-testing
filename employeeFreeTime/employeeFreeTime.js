let _ = require('underscore');

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

Complexities: O(N) time to iterate through the subarrays, and O(N) space to store all employees' hours range

----------------
Code

----------------
Test

----------------
*/

function employeeFreeTime(schedule) {
  let flatSched = _.flatten(schedule);
  let ranges = [];

  for (let i = 0; i < flatSched.length; i+=2) {
    ranges.push(_.range(flatSched[i], flatSched[i+1]));
  }
  
  let actualHoursWorked = Array.from(new Set(_.flatten(ranges))).sort( (a,b) => a-b);

  let min = actualHoursWorked[0];
  let max = actualHoursWorked[actualHoursWorked.length - 1];

  let possHoursWorked = [];

  for (let i = min; i <= max; i++) {
    possHoursWorked.push(i);
  }

  let freeHours = [];

  for (let i = 0; i < possHoursWorked.length; i++) {
    if (!actualHoursWorked.includes(possHoursWorked[i])) {
      let freeTime = possHoursWorked[i];
      freeHours.push([freeTime, freeTime + 1]);
    }
  }

  // check if an end time is also a start time
  for (let i = 0; i < freeHours.length; i++) {
    let currentHr = freeHours[i];
    let nextHr = freeHours[i+1]
    if (nextHr && currentHr[1] === nextHr[0]) {
      currentHr.splice(1, 1);
      nextHr.splice(0, 1);
      currentHr = currentHr.concat(nextHr);
      freeHours.splice(i, 2, currentHr);
    }
  }

  return freeHours;
};

if (window.DEBUG) {
    module.exports = employeeFreeTime;
};