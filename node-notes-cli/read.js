
const read = data => {
  for (var key in data.notes) {
    console.log(`${key}: ${data.notes[key]}`);
  }
};

module.exports = read;
