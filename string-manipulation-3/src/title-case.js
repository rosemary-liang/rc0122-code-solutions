/* exported titleCase */
function titleCase(title) {
  var lowerCase = title.toLowerCase();
  var lowerCaseArray = lowerCase.split(' ');
  var titleArray = [];
  var exceptionsArray = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];

  for (var i = 0; i < lowerCaseArray.length; i++) {
    var word = lowerCaseArray[i];
    if (exceptionsArray.includes(word) && i >= 1 && !(lowerCaseArray[i - 1].includes(':'))) {
      titleArray.push(word);
    } else {
      var upperCase = word[0].toUpperCase() + word.substring(1);
      if (upperCase === 'Javascript') {
        upperCase = 'JavaScript';
      }
      if (upperCase === 'Javascript:') {
        upperCase = 'JavaScript:';
      }
      if (upperCase === 'Api') {
        upperCase = 'API';
      }
      if (upperCase.includes('-')) {
        var dashArray = upperCase.split('-');
        var newDashArray = [];
        for (var j = 0; j < dashArray.length; j++) {
          var dashWord = dashArray[j];
          var dashUpperCase = dashWord[0].toUpperCase() + dashWord.substring(1);
          newDashArray.push(dashUpperCase);
        }
        upperCase = newDashArray[0] + '-' + newDashArray[1];
      }
      titleArray.push(upperCase);
    }
  }
  var capitalizedTitle = titleArray.join(' ');
  return capitalizedTitle;
}
