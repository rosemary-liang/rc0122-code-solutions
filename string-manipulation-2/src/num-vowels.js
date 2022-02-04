/* exported numVowels */

// if charat(index) is a vowel, then count it

// function numVowels(string) {
//  var numberOfVowels = 0;
//  for (var i = 0; i < string.length -1; i++) {
//    if (string.charAt(i) === 'a' || string.charAt(i) === 'A' ||
//       string.charAt(i) === 'e' || string.charAt(i) === 'E') ||
//       string.charAt(i) === 'i' || string.charAt(i) === 'I' ||
//       string.charAt(i) === 'o' || string.charAt(i) === 'O' ||
//       string.charAt(i) === 'u' || string.charAt(i) === 'U' ||) {
//         numberOfVowels++
//       }
//  }
//  return numberOfVowels;
// }

function numVowels(string) {
  var numberOfVowels = 0;
  var vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  for (var character of string) {
    if (vowels.includes(character)) {
      numberOfVowels++;
    }
  }
  return numberOfVowels;
}

// define a function, numVowels, with one parameter, a string
// the number 0 is assigned to variable, numberOfVowels
// array with vowels is assigned to variable, vowels
// for of statement to iterate over a string (goes through each character)
// if statement with condition that vowels array includes string character
// increment variable numberOfVowels
// return numberOfVowels
