/* exported getWords */
function getWords(string) {
  var stringArray = [];
  if (string === '') {
    stringArray = [];
    return stringArray;
  } else {
    var splitWords = string.split(' ');
    for (var i = 0; i < splitWords.length; i++) {
      stringArray.push(splitWords[i]);
    }
    return stringArray;
  }

}

// define a function, getWords, which takes a single parameter, "string"
// define a variable, stringArray, and assign it an empty array
// define an if stmt with a condition, string === '',
// if  assign the value of stringArray to an empty array
// else
// Use split method on the string object with a, ' ' , delimiter and
// assign the result to the variable, splitWords
// define a for loop, to iterate through length of splitWords object
// in the loop, push the value of splitWords at i into the object stringArray
// return stringArray
