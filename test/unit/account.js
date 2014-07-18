/* jshint expr:true */
/* global describe, it */

'use strict';

var expect = require('chai').expect;
var Account = require('../../app/models/account');

describe ('Account', function(){
  describe ('constructor', function(){
    it ('should create a new account', function(){
      var sara = new Account(3, 'Sara', 'savings', 1500);

      expect(sara.number).to.equal(3);
      expect(sara.name).to.equal('Sara');
      expect(sara.type).to.equal('savings');
      expect(sara.balance).to.equal(1500);
      expect(sara).to.be.instanceof(Account);
      expect(sara.deposits).to.have.length(0);
      expect(sara.withdraws).to.have.length(0);
    });
  });
  describe ('#deposit', function(){
    it ('should deposit money into the account',function(){
      var sara = new Account(3, 'Sara', 'savings', 1500);

      sara.deposit(5000);

      expect(sara.balance).to.equal(6500);
      expect(sara.deposits).to.have.length(1);
    });
  });
  describe ('#withdraw', function(){
    it ('should withdraw money from the account and assess fee in below 0',function(){
      var sara = new Account(3, 'Sara', 'savings', 1500);

      expect(sara.isActive).to.equal(true);
      expect(sara.penalty).to.equal(0);
      
      for(var i = 0; i < 4; i++){
        sara.withdraw(2000);
      }

      expect(sara.balance).to.equal(-4650);
      expect(sara.withdraws).to.have.length(3);
    });
  });
});
