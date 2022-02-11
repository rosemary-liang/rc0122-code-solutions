/* exported flatten */

// take array[i], assign to variable subArray
// push subArray[j] to flattenedArray

function flatten(array) {
  var flattenedArray = [];
  for (var i = 0; i < array.length; i++) {
    var subArray = array[i];
    if (Array.isArray(subArray)) {
      for (var j = 0; j < subArray.length; j++) {
        flattenedArray.push(subArray[j]);
      }
    } else {
      flattenedArray.push(subArray);
    }
  }
  return flattenedArray;
}
