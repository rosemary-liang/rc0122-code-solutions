/* exported isVowel */
function isVowel(char) {
  if (char === 'a' || char === 'A' ||
    char === 'e' || char === 'E' ||
    char === 'i' || char === 'I' ||
    char === 'o' || char === 'O' ||
    char === 'u' || char === 'U') {
    return true;
  } else {
    return false;
  }
}
