/* exported reverse */
function reverse(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

// define function, reverse, which takes one argument, array
// define variable, newArray, and assign it empty array
// define for loop to iterate through array length descending starting from last character to first character
// if true, push array[i] to newArray
// return newArray
