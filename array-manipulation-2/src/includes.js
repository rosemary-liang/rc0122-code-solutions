/* exported includes */
function includes(array, value) {
  var result;
  if (array === []) {
    result = false;
  } else {

    for (var i = 0; i < array.length; i++) {
      if (array[i] === value) {
        result = true;
        break;
      } else {
        result = false;
      }
    }
    if (!result) {
      result = false;
    }
  }
  return result;
}
