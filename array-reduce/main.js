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

const deposits = account.filter(account => account.type === 'deposit');
const withdrawals = account.filter(account => account.type === 'withdrawal');

const toDepositAmount = account => {
  return account.amount;
};

const toWithrawalAmount = account => {
  return (account.amount * -1);
};

const depositBalance = deposits.map(toDepositAmount);
const withdrawalBalance = withdrawals.map(toWithrawalAmount);
const sumAllDeposits = depositBalance.reduce(
  (previousValue, currentValue) => previousValue + currentValue, 0);
const sumAllWithdrawals = withdrawalBalance.reduce(
  (previousValue, currentValue) => previousValue + currentValue, 0);

const balance = sumAllDeposits + sumAllWithdrawals;

console.log('balance:', balance);

const composite = traits.reduce(
  (composite, trait) => {
    return Object.assign(composite, trait);
  });

console.log('composite:', composite);
