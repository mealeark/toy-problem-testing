import numberToEnglish from './numberToEnglish';

describe('numberToEnglish', () => {
  test('is a function', () => {
    expect(numberToEnglish).toBeInstanceOf(Function);
  });

  test('it translates tens to English', () => {
    expect(numberToEnglish(10)).toEqual('ten');
    expect(numberToEnglish(20)).toEqual('twenty');
    expect(numberToEnglish(30)).toEqual('thirty');
    expect(numberToEnglish(40)).toEqual('fourty');
    expect(numberToEnglish(50)).toEqual('fifty');
    expect(numberToEnglish(60)).toEqual('sixty');
    expect(numberToEnglish(70)).toEqual('seventy');
    expect(numberToEnglish(80)).toEqual('eighty');
    expect(numberToEnglish(90)).toEqual('ninety');
  });

  test('it hyphenates compounds from 21-99', () => {
    expect(numberToEnglish(22)).toEqual('twenty-two');
    expect(numberToEnglish(73)).toEqual('seventy-three');
    expect(numberToEnglish(98)).toEqual('ninety-eight');
  });

  test('it translates hundreds to English', () => {
    expect(numberToEnglish(100)).toEqual('one hundred');
    expect(numberToEnglish(255)).toEqual('two hundred fifty-five');
    expect(numberToEnglish(630)).toEqual('six hundred thirty');
    expect(numberToEnglish(900)).toEqual('nine hundred');
  });
});
