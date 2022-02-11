/* exported difference */
function difference(first, second) {
  var result = [];

  for (var i = 0; i < first.length; i++) {
    if (!(second.includes(first[i]))) {
      result.push(first[i]);
    }
  }

  for (var j = 0; j < second.length; j++) {
    if (!(first.includes(second[j]))) {
      result.push(second[j]);
    }
  }

  return result;
}
