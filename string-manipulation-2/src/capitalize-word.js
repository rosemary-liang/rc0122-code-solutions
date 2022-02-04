/* exported capitalizeWord */
function capitalizeWord(word) {
  var finalResult;
  var result = (word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  if (result === 'Javascript') {
    finalResult = 'JavaScript';
  } else {
    finalResult = result;
  }
  return finalResult;
}

// define a function capitalizeWord with one parameter, a string, word
// var result
// uppercase charAt(0)
// slice word at index[1] and lowercase
// result = concentanate

// if result is Javascript, return Javascript
// else do nothing

// return result
