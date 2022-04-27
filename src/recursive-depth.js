const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
      let current = 1;
      let max = 1;

      arr.forEach( item => {
        if (Array.isArray(item)) {
          let deep = this.calculateDepth(item)
          current += deep;
        }
        if (current > max) max = current;
        current = 1
      })

      return max;
  }
}

module.exports = {
  DepthCalculator
};
