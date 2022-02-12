/* exported intersection */
function intersection(first, second) {
  var result = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      result.push(first[i]);
    }
  }
  return result;
}
