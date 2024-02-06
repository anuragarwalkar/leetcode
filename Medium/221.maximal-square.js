// function maximalSquare(matrix) {
//     if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
//         return 0;
//     }

//     const rows = matrix.length;
//     const cols = matrix[0].length;
//     let maxSquare = 0;
//     const dp = new Map();

//     function exploreSquare(row, col, size) {
//         // Base case: if we reached the edge of the matrix or encountered '0'
//         if (row + size >= rows || col + size >= cols || matrix[row][col] === '0') {
//             return size;
//         }

//         // Check if we can expand the square
//         let newSize = size + 1;
//         for (let r = row; r <= row + size; r++) {
//             for (let c = col; c <= col + size; c++) {
//                 if (matrix[r][c] === '0') {
//                    return size
//                 }
//             }
//         }

//         // Try expanding the square
//         return exploreSquare(row, col, newSize);
//     }

//     // Iterate through each cell to find the maximal square
//     for (let i = 0; i < rows; i++) {
//         for (let j = 0; j < cols; j++) {
//             if (matrix[i][j] === '1') {
//                 maxSquare = Math.max(maxSquare, exploreSquare(i, j, 0));
//             }
//         }
//     }

//     return maxSquare * maxSquare;
// }


function maximalSquare(array) {
    const rows = array.length;
    const columns = array[0].length;

    const getKey = (r, c) => `${r}-${c}`; 

    const cache = {};

    function helper(r, c) {
        if(r >= rows || c >= columns) {
            return 0;
        }

        if(cache[getKey(r, c)] == null) {
            let left = helper(r, c + 1);
            let bottom = helper(r + 1, c);
            let crorss = helper(r + 1, c + 1);
    
            cache[getKey(r, c)] = 0;
    
            if(array[r][c] === "1") {
                cache[getKey(r, c)] = 1 + Math.min(left, bottom, crorss);
            }
        }

        return cache[getKey(r, c)]
     }
     helper(0, 0);
    return Math.max(...Object.values(cache)) ** 2;
}


console.log(maximalSquare([
    ["1","0","1","0","0"],
    ["1","0","1","1","1"],
    ["1","1","1","1","1"],
    ["1","0","0","1","0"]]
)
);