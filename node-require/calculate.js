const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

// if  operator is plus minus times over; then do the function
const x = parseInt(process.argv[2]);
const y = parseInt(process.argv[4]);
const operator = process.argv[3];

if (operator === 'plus') {
  console.log(`result: ${add.add(x, y)}`);
} else if (operator === 'minus') {
  console.log(`result: ${subtract.subtract(x, y)}`);
} else if (operator === 'times') {
  console.log(`result: ${multiply.multiply(x, y)}`);
} else if (operator === 'over') {
  console.log(`result: ${divide.divide(x, y)}`);
}
