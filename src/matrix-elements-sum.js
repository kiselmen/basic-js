const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0;
  let newMatrix = [];

  for (let row = 0; row < matrix[0].length; row++){
    newMatrix.push([]);
  }

  for (let row = 0; row < matrix.length; row++){
      for (let column = 0; column < matrix[row].length; column++){
          newMatrix[column].push(matrix[row][column]);
      }
  }

  for (let row = 0; row < newMatrix.length; row++){
    for (let elem = 0; elem < newMatrix[row].length; elem++){
        if (newMatrix[row][elem] !== 0) {
          result += newMatrix[row][elem];
        }  
        else {
          elem = newMatrix[row].length;
        }  
    }
  }
  return result;
}

// matrix = [
//    [0, 1, 1, 2],
//    [0, 5, 0, 0],
//    [2, 0, 3, 3]
// ]
// getMatrixElementsSum(matrix)  

module.exports = {
  getMatrixElementsSum
};
