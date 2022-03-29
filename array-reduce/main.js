const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce(
  (previousValue, currentValue) =>
    previousValue + currentValue, 0
);

console.log(`sum all numbers: ${sum}`);

const product = numbers.reduce(
  (previousValue, currentValue) =>
    previousValue * currentValue
);

console.log(`product: ${product}`);

const getBalance = (balance, tx) => {
  if (tx.type === 'deposit') {
    return balance + tx.amount;
  } else if (tx.type === 'withdrawal') {
    return balance - tx.amount;
  }
};

const balance = account.reduce(getBalance, 0);

console.log('balance:', balance);

const composite = traits.reduce(
  (composite, trait) => {
    return Object.assign(composite, trait);
  });

console.log('composite:', composite);
