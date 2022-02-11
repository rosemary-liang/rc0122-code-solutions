/* exported unique */
function unique(array) {
  var keys = [];
  for (var i = 0; i < array.length; i++) {
    if (!(keys.includes(array[i]))) {
      keys.push(array[i]);
    }
  }
  return keys;
}
