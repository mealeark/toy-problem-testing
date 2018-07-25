/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

// O: boolean (true or false if prime)
// I: number
// C: none
// E: none

// Diagramming
// Input: 5
// 5/5 = 1 or 5 % 5 = 0
// 5/1 = 5 or 5 % 1 = 0

// 5 % 2 === 0 ? false -> still a prime
// 5 % 3 === 0 ? false -> still a prime
// 5 % 4 === 0 ? false -> still a prime

// iterate from 2 to input num (not including the input)

// Output: true (is a prime)


const primeTester = function (n) {
  if (typeof n !== 'number' || n < 1 || n % 1 !== 0) {
    // n isn't a number or n is less than 1 or n is not an integer
    return false;
  }
  // TODO: return true if n is prime, false otherwise
  // iterate from 2 to input num (excluding input)
  for (let i = 2; i < n; i++) {
    // check if input num divides by current num evenly
    if (n % i === 0) {
    // if divided evenly, input num is NOT a prime
      // return false
      return false;
    }
  }
  // return true
  return true;
};

// primeTester(6) // true

/* Extra credit: Write a function that generates a list of all prime numbers
 * in a user-specified range (inclusive). If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
 * saucy, check out the Sieve of Atkin.)
 */

const primeSieve = function (start, end) {
  const primes = [];
  for (let i = start; i <= end; i++) {
    if (primeTester(i)) {
      primes.push(i);
    }
  }
  return primes;
};

primeSieve(10, 30);

// start: 10, end: 30
/*
  Expected Output: 11, 13, 17, 19, 23, 29
  store final primes
  iterate from start to end (inclusively)
    implement helper func (primeTester)
    if primeTester gives true (is a prime)
    add this num to a final array

  output final primes
*/

if (window.DEBUG) {
  module.exports = primeTester;
  module.exports = primeSieve;
}
