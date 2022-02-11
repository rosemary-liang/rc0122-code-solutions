/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var frequencyFirstString = {};
  for (var i = 0; i < firstString.length; i++) {
    var key = firstString[i];
    if (frequencyFirstString[key]) {
      frequencyFirstString[key]++;
    } else {
      frequencyFirstString[key] = 1;
    }
  }

  var frequencySecondString = {};
  for (i = 0; i < secondString.length; i++) {
    key = secondString[i];
    if (frequencySecondString[key]) {
      frequencySecondString[key]++;
    } else {
      frequencySecondString[key] = 1;
    }
  }

  for (var value in frequencyFirstString) {
    if (frequencyFirstString[value] !== frequencySecondString[value]) {
      return false;
    }
  }

  return true;
}
