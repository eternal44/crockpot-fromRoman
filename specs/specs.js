var expect = require('chai').expect;
var romanToDecimal = require('./../src/conversion');
var testParams = require('./testList')

describe('Roman Numeral# ', function(){
  testParams.forEach(function(param){
    it('translate ' + param.numeral + ' to decimal', function(){
      expect(romanToDecimal(param.numeral)).to.equal(param.decimal);
    })
  })
});
