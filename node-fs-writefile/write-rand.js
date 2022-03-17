const fs = require('fs');

const randomNumber = Math.random();
const randomNumberString = randomNumber.toString();

fs.writeFile('random.txt', randomNumberString, err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
