/* exported union */
function union(first, second) {
  var result = [];

  for (var i = 0; i < first.length; i++) {
    result.push(first[i]);
  }

  for (var j = 0; j < second.length; j++) {
    if (!(result.includes(second[j]))) {
      result.push(second[j]);
    }
  }
  return result;
}
