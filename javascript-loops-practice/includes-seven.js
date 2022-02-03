/* exported includesSeven */
function includesSeven(array) {
  var booleanResult;
  if (array.length < 1) {
    booleanResult = false;
  } else if (array.length >= 1) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] === 7) {
        booleanResult = true;
        break;
      } else {
        booleanResult = false;
      }
    }
  }
  return booleanResult;
}
