/* exported isPalindromic */
function isPalindromic(string) {
  var boolean;
  var newString = string.replace(' ', '');
  for (var i = 0; i < newString.length; i++) {
    if (newString[i] === newString[(newString.length - (1 + i))]) {
      boolean = true;
    } else {
      boolean = false;
      break;
    }
  }
  return boolean;
}
