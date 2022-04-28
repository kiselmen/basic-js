const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {

    const without = Array.from(arr).
    filter( item => {
      if (item >= 0) return true;
    }).
    sort( (a, b) => b - a);

    // console.log(without);

    let result = [];
    arr.forEach( (item, key, arr) => {
        if (item < 0) {
          result.push(item);
        } else {
          result.push(without.pop());
        }
    })
    // console.log(result);
    return result;
}

// arr = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(arr)

module.exports = {
  sortByHeight
};
