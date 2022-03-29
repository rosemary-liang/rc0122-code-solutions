const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const languages = [
  'Hypertext Markup Language',
  'Cascading Style Sheets',
  'ECMAScript',
  'PHP Hypertext Preprocessor',
  'Structured Query Language'
];

const doubled = x => x + 2;
console.log('doubled:', numbers.map(doubled));

const dollars = number => {
  return `$${number.toFixed(2)}`;
};

const prices = numbers.map(dollars);
console.log(`prices: ${prices}`);

const upperCasedWord = language => language.toUpperCase();
const upperCased = languages.map(upperCasedWord);
console.log('upperCased:', upperCased);

const getFirstLetter = language => language[0];
const firstLetters = languages.map(getFirstLetter);
console.log('firstLetters:', firstLetters);
