// /**
//  * @param {number[][]} matrix
//  * @return {void} Do not return anything, modify matrix in-place instead.
//  */
// var rotate = function (matrix) {
//     const result = Array.from({ length: matrix.length }, () => []);

//     for (let c = 0; c < matrix.length; c++) {
//         for (let r = 0; r < matrix.length; r++) {
//             console.log(matrix[c][r]);

//             result[r][matrix.length - 1 - c] = matrix[c][r]
//         }
//     }

//     return result;
// };


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let left = 0;
    let right = matrix.length - 1;

    while (left < right) {
        for (let i = 0; i < right - left; i++) {
            let top = left;
            let bottom = right;

            const leftTop = matrix[top][left + i];
            const rightTop = matrix[top + i][right];
            const bottomRight = matrix[bottom][right - i];
            const bottomLeft = matrix[bottom - i][left];

            matrix[top + i][right] = leftTop;
            matrix[bottom][right - i] = rightTop;
            matrix[bottom - i][left] = bottomRight;
            matrix[top][left + i] = bottomLeft;
        }
        left++;
        right--
    }

    return matrix;
};

console.log(rotate([
     [5,1,9,11],
     [2,4,8,10],
     [13,3,6,7],
    [15,14,12,16]])) 

// console.log(rotate([[1,2,3],[4,5,6],[7,8,9]])) 