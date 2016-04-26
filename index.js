var digits = require('./lib/numeralMap')

function translateRomanNumeral (romanNumeral) {
  var DIGIT_VALUES = digits();

  // translate empty string
  if(romanNumeral === '') return 0;

  // return null for invalid numeral
  var regexp = /[I,V,X,L,C,D,M]/g;
  var matches = romanNumeral[0].match(regexp);
  if(matches === null) return 'null';

  var transcribed = [];
  for(var i = 0; i < romanNumeral.length; i++){
    transcribed.push(DIGIT_VALUES[romanNumeral[i]]);
  }

  var result = 0;
  for(var j = 0; j < transcribed.length; j++){
    if(transcribed[j + 1] === undefined){
      result += transcribed[j];
    } else if(transcribed[j] === transcribed[j+1] || transcribed[j] > transcribed[j + 1]){
      result += transcribed[j];
    } else {
      result -= transcribed[j];
    }
  }

  return result;
}

module.exports = translateRomanNumeral;
