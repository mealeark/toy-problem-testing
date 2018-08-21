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

// O: string
// I: number
// C: none
// E: consider cases like "thirty seven"

// Helper function:
// Determine how many numbers to place

const obtainPlace = function (num) {
  let result = '';

  // convert num to string
  const stringifiedNum = String(num);

  // loop through numbersToPlace
  for (const place in numbersToPlace) {
    // If place.length <= stringified.length
    if (place.length <= stringifiedNum.length) {
      // result = place string
      result = numbersToPlace[place];
    } else {
      return result;
    }
  }

  return result;
};

// purpose: convert 3-digit (or smaller) numbers to English
const threeDigitNumbers = function (num) {
  let result = '';

  // convert num to string
  let stringifiedNum = String(num);

  if (stringifiedNum.length === 3) {
    const hundreds = numbersToWords[stringifiedNum[0]];
    result += hundreds + ' hundred ';
    stringifiedNum = stringifiedNum.slice(1);
  }

  if (stringifiedNum.length == 2) {
    if (Number(stringifiedNum[0]) >= 2) {
      var tens = numbersToWords[stringifiedNum[0] + '0'];
      result += tens + ' ';
      stringifiedNum = stringifiedNum.slice(1);
    } else {
      var tens = numbersToWords[stringifiedNum[0] + stringifiedNum[1]];
      result += tens + ' ';
      stringifiedNum = stringifiedNum.slice(2);
    }
  }

  if (stringifiedNum.length === 1) {
    const ones = numbersToWords[stringifiedNum[0]];
    result += ones;
  }

  return result.trim();
};


const numberToEnglish = function () {
  let result = '';
  const num = this;

  // num to string
  let stringifiedNum = String(num);

  // if string length isn't a multiple of 3...
  if (stringifiedNum.length % 3 !== 0) {
    // make it one
    const numberOfZeroes = 3 - (stringifiedNum.length % 3);
    for (let i = 0; i < numberOfZeroes; i++) {
      stringifiedNum = '0' + stringifiedNum;
    }
  }

  var traverseDigits = function (stringifiedNum) {
    // base case
    if (stringifiedNum.length < 3) {
      return;
    }

    // get 3 numbers in english
    const numToConvert = Number(stringifiedNum.slice(0, 3));
    const threeNums = threeDigitNumbers(numToConvert);
    result += ' ' + threeNums;

    // get starting place
    if (stringifiedNum.length > 3) {
      const startingPlace = obtainPlace(num);
      result += ' ' + startingPlace;
    }

    // Recurse - remove the first 3 digits
    traverseDigits(stringifiedNum.slice(3));
  };

  traverseDigits(stringifiedNum);
  return result.trim();
};


if (window.DEBUG) {
  module.exports = numberToEnglish;
}
