/* exported compact */
function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// define a function, compact, which takes an argument, array
// define a variable, newArray, and assign it empty array
// define for loop to iterate through length of array
// if array[i] is truthy, push array[i] to newArray
// return newArray
