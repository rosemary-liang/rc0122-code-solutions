/* exported capitalizeWords */

// break up string by spaces
// capitalize first letter of each word at index
// concatenate back together

function capitalizeWords(string) {
  var words = string.split(' ');

  for (var i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
    var newString = words.join(' ');
  }
  return newString;
}

// define a function, capitalizeWords, which takes one parameter, string
// use split method of string object on delimiter space and assign array to variable, words
// define for loop to iterate through length of words array
// for each word at index, take the first letter and make it uppercase,
// concatenate with
// for each word at index, take all letters after index 1 and make them lowercase
// words array is joined at space delimiter to make 1 long string and assigned to variable, newString
// return newString
