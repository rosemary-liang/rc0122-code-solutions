/* exported Bank */
function Bank() {
  this.accounts = [];
  this.nextAccountNumber = 1;
}

Bank.prototype.incrementAccountNumber = function () {
  this.nextAccountNumber++;
};

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0 && Number.isInteger(balance)) {
    var newAccount = new Account(this.nextAccountNumber, holder);
    this.accounts.push(newAccount);

    newAccount.deposit(balance);
    newAccount.getBalance();

    this.incrementAccountNumber();
    return newAccount.number;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  var thisAccount = null;
  for (var i = 0; i < this.accounts.length; i++) {
    if ((Number.isInteger(number)) && (number === this.accounts[i].number)) {
      thisAccount = this.accounts[i];
    }
  }
  return thisAccount;
};

Bank.prototype.getTotalAssets = function () {
  if (this.accounts.length === 0) {
    return 0;
  } else {
    var totalAssets = 0;
    for (var i = 0; i < this.accounts.length; i++) {
      totalAssets += this.accounts[i].getBalance();
    }
    return totalAssets;
  }
};
