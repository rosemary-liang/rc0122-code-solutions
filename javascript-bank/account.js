/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount > 0 && Number.isInteger(amount)) {
    var deposit = new Transaction('deposit', amount);
    this.transactions.push(deposit);
    return true;
  } else {

    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  if (amount > 0 && Number.isInteger(amount)) {
    var withdrawal = new Transaction('withdrawal', amount);
    this.transactions.push(withdrawal);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  var totalDeposits = 0;
  var totalWithdrawals = 0;
  if (this.transactions.length >= 1) {
    for (var i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].type === 'deposit') {
        totalDeposits += this.transactions[i].amount;
      } else if (this.transactions[i].type === 'withdrawal') {
        totalWithdrawals += this.transactions[i].amount;
      }
    }
    return totalDeposits - totalWithdrawals;
  } else {
    return 0;
  }
};
