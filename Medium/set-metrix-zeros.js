/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const places = [];

    for(let r = 0; r < matrix.length; r++) {
        for(let c = 0; c < matrix[0].length; c++) {
            if(matrix[r][c] === 0) {
                places.push([r, c]);   
            }
        }   
    }

    for(let i = 0; i < places.length; i++) {
        const [row, column] = places[i];
        for(let r = 0; r < matrix[0].length; r++) {
            matrix[row][r] = 0;
        }

        for(let c = 0; c < matrix.length; c++) {
            matrix[c][column] = 0;
        }
    }
};

console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]))
console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]))