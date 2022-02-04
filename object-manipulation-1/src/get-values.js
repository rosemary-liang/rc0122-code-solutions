/* exported getValues */
function getValues(object, key) {
  var value = [];
  for (var keys in object) {
    value.push(object[keys]);

  }
  return value;
}
