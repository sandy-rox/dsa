/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let hset = new Set();
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] != '.') {
        let row = `row${i}${board[i][j]}`;
        let col = `col${j}${board[i][j]}`;
        let box = `box${parseInt(parseInt(i / 3) * 3 + j / 3)}${board[i][j]}`;
        console.log(row,col,box)
        if (hset.has(row) || hset.has(col) || hset.has(box)) {
          return false;
        }
        else { 
          hset.add(row);
          hset.add(col);
          hset.add(box);
        }
      }
    }
  }
  return true;
};

let output = isValidSudoku([["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]]);
console.log(output);