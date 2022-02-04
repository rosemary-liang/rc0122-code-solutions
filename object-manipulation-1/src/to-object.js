/* exported toObject */
function toObject(keyValuePair) {
  var newObject = {};
  newObject[(keyValuePair[0])] = keyValuePair[1];
  return newObject;
}

// add new property to account object with value
// // account[property] = value
