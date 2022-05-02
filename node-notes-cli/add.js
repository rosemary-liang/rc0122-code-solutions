const fs = require('fs');

const add = (newText, data) => {
  data.notes[data.nextId] = newText;
  data.nextId++;
  const newData = JSON.stringify(data, null, 2);
  fs.writeFile('./data.json', newData, err => {
    if (err) throw err;
  });
};

module.exports = add;

// random change!

// define a function, add, that takes 2 parameters, newText and data
// data.notes at nextId should be assigned value of newText
// data.nextId incremented
// stringify new data and assign to new variable
// test for expected result with console.log
// write new variable data to original json file
// export the file
