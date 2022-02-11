/* exported reverseWords */
function reverseWords(string) {
  var words = string.split(' ');
  var reversedWords = [];
  var reversedString = [];

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var reversedWord = '';

    for (var j = 0; j < word.length; j++) {
      reversedWord += (word[word.length - 1 - j]);
    }
    reversedWords.push(reversedWord);
  }

  reversedString = reversedWords.join(' ');
  return reversedString;
}
