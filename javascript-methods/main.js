var x = 2;
var y = 3;
var z = 5;

var maximumValue = Math.max(x, y, z);
console.log('maximumValue:', maximumValue);

var heroes = ['superman', 'catwoman', 'hulk', 'captain america'];
var randomNumber = Math.random() * heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero', randomHero);

var library = [
  {
    title: '',
    book: ''
  },
  {
    title: '',
    book: ''
  }, {
    title: '',
    book: ''
  }];

var lastBook = library.pop();
console.log('lastBook:', lastBook);

var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library array:', library);

var fullName = 'Rosemary Liu';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
