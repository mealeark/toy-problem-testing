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

Complexities: O(N^3) time to iterate through the subarrays, and O(N) space to store all employees' hours range

----------------
Code

----------------
Test

----------------
*/

let employeeFreeTime = function(schedule) {
  // store result array
  let leisureTime = [];
  
  // make copy of schedule
  let sched = schedule.slice();
  
  // store employee hours worked in a set
  let employeeHours = new Set();
  // store missing hours
  let freeHours = [];
  
  // store min value of range
  let rangeMin = null;
  // store max value of range
  let rangeMax = null;
  // store all nums within range
  let fullRange = [];
  
  // create range of all poss hours worked through flattening all subarrays (of copy) into one large array
  let flattenedSched = sched.reduce(function(a, b) {
    return a.concat(b);
  });
  // sort the large array
  let sortedSched = flattenedSched.sort( (a,b) => {return a - b} );
  
  // grab minimum value
  rangeMin = sortedSched[0][0];
  // grab max value 
  rangeMax = sortedSched[sortedSched.length - 1][1];
  
  // iterate from min to max value 
  for (let i = rangeMin; i <= rangeMax; i++) {
    // add each value into an array of consecutive nums 
    fullRange.push(i);
  }
  
  // iterate through orig schedule
  for (let i = 0; i < schedule.length; i++) {
    // for each employee's schedule (subarray), iterate through the items
      // add employee numbers to set to remove duplicate hours
    for (let j = 0; j < schedule[i].length; j++) {
      // if interval consists of two consec nums, remove the second
      if (schedule[i][j][0] + 1 === schedule[i][j][1]) {
        employeeHours.add(schedule[i][j][0]);   
      } else {
      // else add a range of nums from 1st num to 2nd to employee hours
        for (let hr = schedule[i][j][0]; hr <= schedule[i][j][1]; hr++) {
          employeeHours.add(hr);
        }
      }
      // exclude the end of intervals
      employeeHours.delete(schedule[i][j][1]);
    }
  }
  
  let allEmployeesHours = Array.from(employeeHours).sort( (a,b) => {return a - b} );;
  
  // iterate through set of employees' hours and check if included in array of all poss nums
  for (let i = 0; i < fullRange.length; i++) {
    // if not included, add value to missing hours array
    if (!allEmployeesHours.includes(fullRange[i])) {
      freeHours.push(fullRange[i]);
    }
  }  
  
  // sort missing hours array
  let sortedFreeHours = freeHours.sort( (a, b) => {return a - b} );
  
  // loop through missing hours
  for (let i = 0; i < sortedFreeHours.length; i++) {
    
    // if num is a max, ignore it
    if (sortedFreeHours.includes(rangeMax)) {
      sortedFreeHours.pop();
    }
    
    // if hours aren't consecutive, add curr num to result array in a tuple with its next value
    if (sortedFreeHours[i] + 1 !== sortedFreeHours[i + 1]) {
      leisureTime.push([sortedFreeHours[i], sortedFreeHours[i] + 1]);
    } else if (sortedFreeHours[i] + 1 === sortedFreeHours[i + 1]) {
    // if hours are consecutive, take the min to add to tuple and take the max + 1 to be the end of the tuple
      leisureTime.push( [sortedFreeHours[i], sortedFreeHours[i + 1] + 1] );
      break;
    }
    
  } 
  
  // return results array
  return leisureTime;
};

if (window.DEBUG) {
    module.exports = employeeFreeTime;
}