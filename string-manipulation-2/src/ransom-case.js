/* exported ransomCase */
function ransomCase(string) {
  var result = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      result += string.charAt(i).toLowerCase();
    } else {
      result += string.charAt(i).toUpperCase();
    }
  }
  return result;
}

// get letter index
// index % 2 === 0, uppercase instanceof;
// otherwise lowercase
// concatenate all
