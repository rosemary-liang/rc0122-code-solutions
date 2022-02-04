/* exported truncate */
function truncate(length, string) {
  return string.substring(0, length) + '...';
}

// define a function, truncate, which takes two parameters, length and string
// return the value
//   substring method of the string object staring at index 0 to index of string.length
//   add an ellipses
