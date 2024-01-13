/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let rows = board.length;
    let columns = board[0].length;
    const path = new Set();
  
    function dfs(r, c, index) {
      if(index === word.length) {
        return true;
      }
      const key = `${r}-${c}`;
  
      if(r < 0 || c < 0 || r >= rows || c >= columns || word[index] != board[r][c] || path.has(key)) {
        return false;
      }
  
      path.add(key);
  
      let result = dfs(r + 1, c, index + 1) || dfs(r - 1, c, index + 1) || dfs(r, c + 1, index + 1) || dfs(r, c - 1, index + 1);
  
      path.delete(key);
  
      return result;
    }
  
    for(let r = 0; r < rows; r++) {
      for(let c = 0; c < columns; c++) {
        if(dfs(r, c, 0)) {
          return true;
        }
      }
    }
  
    return false;
  };
  
  // console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED"))
  // console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB"))
  console.log(exist([["a","b"],["c","d"]], "acdb"))