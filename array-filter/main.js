const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const isEven = value => {
  if (value % 2 === 0) {
    return value;
  }
};

console.log('isEven:', numbers.filter(isEven));

const overFive = value => {
  if (value > 5) {
    return value;
  }
};

console.log('overFive:', numbers.filter(overFive));

const startWithE = name => {
  if (name.startsWith('E')) {
    return name;
  }
};

console.log('startWithE:', names.filter(startWithE));

const haveD = name => {
  if (name.indexOf('D') >= 0 || name.indexOf('d') >= 0) {
    return name;
  }
};

console.log('haveD:', names.filter(haveD));
