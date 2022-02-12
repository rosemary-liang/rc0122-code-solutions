/* exported zip */
function zip(first, second) {
  var finalArray = [];
  if (first.length > second.length) {
    var shortestArray = second;
  } else {
    shortestArray = first;
  }

  for (var i = 0; i < shortestArray.length; i++) {
    var subArray = [];
    subArray.push(first[i]);
    subArray.push(second[i]);
    finalArray.push(subArray);
  }
  return finalArray;
}
