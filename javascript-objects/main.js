var student = {
  firstName: 'Rosemary',
  lastName: 'Liu',
  age: '30'
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'Finance';
console.log('value of livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Mazda',
  model: 'CX-5',
  year: '2017'
};

vehicle['color'] = 'blue';
vehicle['isConvertible'] = false;
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Ninja',
  type: 'cat'
};
delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
