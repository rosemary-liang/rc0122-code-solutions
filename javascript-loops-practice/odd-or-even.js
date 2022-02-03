/* exported oddOrEven */
function oddOrEven(numbers) {
  var arrayStrings = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      arrayStrings.push('even');
    } else {
      arrayStrings.push('odd');
    }
  }
  return arrayStrings;
}
