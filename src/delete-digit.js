const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    const num = n;
    const digArray = [];
    num.toString().split('').forEach( (item, key, array) =>{
      digArray.push(array.slice(0, key).join('') + array.slice(key + 1).join(''));
    })
    return Math.max(...digArray);
}

module.exports = {
  deleteDigit
};
