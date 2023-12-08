/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    const squares = []

    for (let r = 0; r < board.length; r++) {
        const row = {};
        const colum = {};

        for (let c = 0; c < board.length; c++) {
            const key = `${Math.floor(r / 3)},${Math.floor(c / 3)}`;

            if (squares[key] && board[c][r] !== '.') {
                if (squares[key].has(board[c][r])) {
                    return false
                }

                squares[key].add(board[c][r]);
            }

            if (!squares[key] && board[c][r] !== '.') {
                squares[key] = new Set([board[c][r]]);
            }

            if (row[board[r][c]] || colum[board[c][r]]) {
                return false;
            }

            if (board[c][r] !== '.') {
                colum[board[c][r]] = true;
            }
            if (board[r][c] !== '.') {
                row[board[r][c]] = true;
            }
        }

    }
    return true;
};

console.log(isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"
]]))