/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
* Extra credit: Make your function support decimals.
* Example:
*   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
*
 */

const numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
const numbersToPlace = {
  10: 'ten',
  100: 'hundred',
  1000: 'thousand',
  1000000: 'million',
  1000000000: 'billion',
  1000000000000: 'trillion',
  1000000000000000: 'quadrillion',
  1000000000000000000: 'quintillion',
};

// O: string represent the number in English
// I: number
// C: none
// E: account for nums >= 20,
// which need dashes with the number in its ones place
// dashes are only included for tens place

/*
Diagramming
ones (1-9): call the value from the obj, numbersToWords
teens (10-19): call the value from the obj, numbersToWords
tens (20-90):
   ex. 25 -> 'twenty-five'
   length 25 === 2
   left num = 2 -> twenty (from numbersToWords) + '-'
   right num = 5 -> five (from numbersToWords)
hundreds (100-900):
   ex. 233 -> 'two hundred thirty-three'
   length 233 === 3
   loop through individ digits
   first digit (2) -> 'two' + 'hundred'
   second digit (3) -> 3*10 -> 'thirty' (from numbersToWords) + '-'
   third digit (3) -> 3 (from numbersToWords) -> 'three'
thousands (1000-9000):
   ex. 3761 -> 'three thousand seven hundred sixty-one'
   length 3761 === 4
   loop through individ digits
   first digit (3) -> 3*1000 -> 'three' + 'thousand'
     3671.length === 1000.length (from numbersToPlace)
   second digit (7) -> 7*100 -> 'seven' + 'hundred'
   third digit (6) -> 6*10 ->

   ex. 36,000 -> ten thousand -> measure the length in 3s
     starting from the right-most num, count in threes
     to determine our place


*/

Number.prototype.toEnglish = function (number) {
  // 
};

if (window.DEBUG) {
  module.exports = Number.prototype.toEnglish;
}
