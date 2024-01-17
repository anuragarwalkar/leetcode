/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[0].length; c++) {
            const aliveCount = [board[r - 1]?.[c], board[r + 1]?.[c], board[r]?.[c + 1], board[r]?.[c - 1], board[r + 1]?.[c + 1], board[r + 1]?.[c - 1], board[r - 1]?.[c - 1], board[r - 1]?.[c + 1]];
            if (board[r][c] === 0) {
                if (aliveCount.filter(item => item === 1 || item === 3).length === 3) {
                    board[r][c] = 2;
                }else {
                    board[r][c] = 0;
                }
            }else if(board[r][c] === 1) {
                if(aliveCount.filter(item => item === 1 || item === 3).length === 2 || aliveCount.filter(item => item === 1 || item === 3).length === 3) {
                    board[r][c] = 3;
                }else {
                    board[r][c] = 1;
                }
            }
        }
    }

    for(let r = 0; r < board.length; r++) {
        for(let c = 0; c < board[0].length; c++) {
            if(board[r][c] === 1) {
                board[r][c] = 0;
            }else if(board[r][c] === 2 || board[r][c] === 3) {
                board[r][c] = 1;
            }
        }
    }
};


gameOfLife([[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]]);