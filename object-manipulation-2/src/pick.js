/* exported pick */

// if key is one of the properties in source, then push to new object
// how to push key:value pair? right now only pushing keys

function pick(source, keys) {
  var result = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = source[key];
    if (key in source && value !== undefined) {
      result[key] = value;
    }
  }
  return result;
}

// define a function, pick, with 2 parameters, source and keys
// an empty object literal is assigned to variable, result
// for loop to iterate through the length of keys array
// keys at index i is assigned to the variable, keys
// the key property of the source object is being assigned to variable, value
// if statement where the key variable is in the source and the variable. value is strictly not equal to undefined
// then push the key: value pair to the result object through bracket notation
