const fs = require('fs');

const update = (id, newText, data) => {
  data.notes[id] = newText;
  const newData = JSON.stringify(data, null, 2);
  fs.writeFile('./data.json', newData, 'utf-8', err => {
    if (err) throw err;
  });
};

module.exports = update;
