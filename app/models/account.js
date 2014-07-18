'use strict';

function Account(number,name,type,balance){
  this.number = number;
  this.name = name;
  this.type = type;
  this.balance = balance;
  
  this.deposits = [];
  this.withdraws = [];
  this.isActive = true;
  this.penalty = 0;
}

Account.prototype.deposit = function(deposit){
  if(this.isActive === true){
  this.deposits.push(deposit);
  this.balance += deposit;
  }
};

Account.prototype.withdraw = function(withdraw){
  if(this.isActive === true){
    this.withdraws.push(withdraw);
    this.balance -= withdraw;
  
    if(this.balance < 0){
      this.balance -= 50;
      this.penalty++;
    }

    if(this.penalty >= 3){
      this.isActive = false;
    }
  }
};


module.exports = Account;
