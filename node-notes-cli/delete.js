const fs = require('fs');

const deleteId = (id, data) => {
  delete data.notes[id];
  const newData = JSON.stringify(data, null, 2);
  fs.writeFile('./data.json', newData, 'utf-8', err => {
    if (err) throw err;
  });
};

module.exports = deleteId;
