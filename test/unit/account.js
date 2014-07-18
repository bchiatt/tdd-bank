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
  describe ('#deposit', function(){
    it ('should deposit money into the account',function(){
      var sara = new Account(3, 'Sara', 'savings', 1500);

      sara.withdraw(1000);

      expect(sara.balance).to.equal(500);
      expect(sara.withdraw).to.have.length(1);
    });
  });
});
