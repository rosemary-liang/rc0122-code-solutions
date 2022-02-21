/* exported student */
function fullName() {
  return this.firstName + ' ' + this.lastName;
}

function introduction() {
  return 'Hello, my name is ' + this.firstName + ' ' + this.lastName + ' and I am studying ' + this.subject + '.';
}

var student = {
  firstName: 'Rosemary',
  lastName: 'Liu',
  subject: 'JavaScript',
  getFullName: fullName,
  getIntroduction: introduction

};
