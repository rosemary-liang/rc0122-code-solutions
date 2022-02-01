function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('convertMinutesToSecondsResult:', convertMinutesToSecondsResult);

function greet(name) {
  return ('Hey, ' + name);
}
var greetResult = greet('Beavis');
console.log('greetResult: ' + greetResult);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var areaResult = getArea(17, 42);
console.log('getAreaResult: ' + areaResult);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

var firstNameresult = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('firstNameResult: ' + firstNameresult);

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}

var lastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('lastElementResult: ' + lastElementResult);
