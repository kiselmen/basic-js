const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

function transform(arr) {
  if (Array.isArray(arr) === false) throw new Error(`'arr' parameter must be an instance of the Array!`);
  let outArray = [];
  let iteration = 0;
  if (arr.length === 0) return [];
  console.log(arr);
  while (iteration < arr.length){
      console.log(iteration, arr.length, outArray);
      let curItem = arr[iteration];
      if (curItem === '--discard-next') {
        try {arr.splice(iteration, 2);} catch {}
        iteration = iteration + 1;;
        continue;
      }  
      if (curItem === '--discard-prev') {
        try {
          outArray.pop();
        } catch {}  
        iteration++;
        continue;
      }
      if (curItem === '--double-next') {
        if (iteration < arr.length - 1) {
           outArray.push(arr[iteration + 1]);
        }   
        iteration++;
        continue;
      }
      if (curItem === '--double-prev') {
        if (iteration > 0) {
          outArray.push(arr[iteration - 1]);
        }
        iteration++;
        continue;
      } else {
        outArray.push(arr[iteration]);
        iteration++;
      }
  }
  return outArray;
}

// const arr = [1, 2, 3, '--discard-next'];
// transform(arr);

module.exports = {
  transform
};
