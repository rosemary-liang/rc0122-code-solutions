/* exported swapChars */

function swapChars(firstIndex, secondIndex, string) {
  var charArray = string.split('');
  var first = charArray[firstIndex];
  var second = charArray[secondIndex];
  charArray[firstIndex] = second;
  charArray[secondIndex] = first;
  var result = charArray.join('');
  return result;
}
