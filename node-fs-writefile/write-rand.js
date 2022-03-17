const fs = require('fs');

const randomNumber = Math.random() + '/n';

fs.writeFile('random.txt', randomNumber, 'utf-8', err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
