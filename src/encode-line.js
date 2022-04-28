const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let lastSymbol = '';
  let count = 1;

  str.split('').forEach( symbol => {
    if (symbol !== lastSymbol) {
      if (count === 1) {
          result += lastSymbol;
      } else {
          result += count + lastSymbol;
      }
      count = 1;
      lastSymbol = symbol;
    } else {
      count++;
    }
  })
  if (count === 1) {
      result += lastSymbol; 
  }
  else {
      result += count + lastSymbol;
  }

  return result
}

module.exports = {
  encodeLine
};
