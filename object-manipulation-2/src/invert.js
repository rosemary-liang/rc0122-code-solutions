/* exported invert */

// for each key in source, get the value and assign to variable, value
// for each key in source, get the key and assign to variable, key
// then push key:value pair to new object

function invert(source) {
  var result = {};
  for (var key in source) {
    var newValue = key;
    var newKey = source[key];
    result[newKey] = newValue;
  }
  return result;
}
