const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
    let nArray = n.toString().split('');
    while (nArray.length > 1){
      let sum = 0;
      nArray.forEach( item => sum += Number(item));
      nArray = sum.toString().split('');
    }
    // console.log(nArray[0]);
    return Number(nArray[0]);
}

// getSumOfDigits(100);
module.exports = {
  getSumOfDigits
};
