/* exported reverseWord */

function reverseWord(word) {
  var reversedWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    reversedWord = reversedWord + word.charAt(i);
  }
  return reversedWord;
}

// define a function, reverseWord, with one argument, a string 'word'
// define a variable, reversedWord, and assign it value of an empty string
// define a for loop to iterate through character length of string 'word'
// start at last index, work to first index
// in the loop, concatenate the character to the variable reversedWord
// return string reversedWord
