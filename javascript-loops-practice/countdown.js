/* exported countdown */
function countdown(number) {
  var countdownResult = [number];
  for (var i = number; i > 0; i--) {
    countdownResult.push(i - 1);
  }
  return countdownResult;
}
