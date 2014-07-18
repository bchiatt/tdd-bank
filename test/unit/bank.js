/* jshint expr:true */
/* global describe, it */

'use strict';

var expect = require('chai').expect;
var Bank = require('../../app/models/bank');

describe ('Bank', function(){
  describe ('constructor', function(){
    it ('should create a new bank', function(){
      var bank = new Bank('Chase');
      expect(bank.name).to.equal('Chase');
      expect(bank).to.be.instanceof(Bank);
      expect(bank.accounts).to.have.length(0);
    });
  });
});
