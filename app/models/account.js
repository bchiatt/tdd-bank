'use strict';

function Account(number,name,type,balance){
  this.number = number;
  this.name = name;
  this.type = type;
  this.balance = balance;
  
  this.deposits = [];
  this.withdraws = [];
}

Account.prototype.deposit = function(deposit){
  this.deposits.push(deposit);
  this.balance += deposit;
};

Account.prototype.withdraw = function(withdraw){
  this.withdraws.push(withdraw);
  this.balance -= withdraw;
  if(this.balance < 0){
   this.balance -= 50;
  }
};


module.exports = Account;
