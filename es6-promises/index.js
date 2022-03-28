const takeAChance = require('./take-a-chance');

const promiseA = takeAChance('Rosemary');

promiseA.then(value => {
  console.log(value);
});

promiseA.catch(error => {
  console.error(error.message);
});
