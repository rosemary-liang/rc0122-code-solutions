// require data.json file
// require add file
// test add file
// repeat last 2 steps for next few functions
// set up variables for inputs (command, input1, input2
// use switch to set up cases for the input, command
// test for expected result

const data = require('./data.json');

const read = require('./read');
const add = require('./add');
const deleteId = require('./delete');
const update = require('./update');

const command = process.argv[2];
const input1 = process.argv[3];
const input2 = process.argv[4];

switch (command) {
  case 'read':
    read(data);
    break;
  case 'add':
    add(input1, data);
    break;
  case 'delete':
    deleteId(input1, data);
    break;
  case 'update':
    update(input1, input2, data);
    break;
  default:
    console.log('oops not a command');
}
