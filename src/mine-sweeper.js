const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function minesweeper(matrix) {
  const newMatrix = [];

  for (let row = 0; row < matrix.length; row++){
    newMatrix.push([]);
    for (let column = 0; column < matrix[row].length; column++){
      let mines = 0;

      if (matrix[row][column - 1] === true) mines++;
      if (matrix[row][column + 1] === true) mines++;
  
      if (matrix[row - 1]){
        if (matrix[row - 1][column - 1] === true) mines++;
        if (matrix[row - 1][column] === true) mines++;
        if (matrix[row - 1][column + 1] === true) mines++;
      }

      if (matrix[row + 1]){
        if (matrix[row + 1][column - 1] === true) mines++;
        if (matrix[row + 1][column] === true) mines++;
        if (matrix[row + 1][column + 1] === true) mines++;
      }

      newMatrix[row][column] = mines;
    }
  }

  // console.log(newMatrix);
  return newMatrix;
}

// matrix = [
//    [true, false, false],
//    [false, true, false],
//    [false, false, false]
// ]
// minesweeper(matrix); 

module.exports = {
  minesweeper
};
