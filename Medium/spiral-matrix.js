/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let top = 0;
    let bottom = matrix.length;  
    let left = 0;
    let right = matrix[0].length;
    const result = [];

    while(left < right && top < bottom) {

        for(let i = left; i < right; i++) {
            result.push(matrix[top][i]);
        }
        top++;

        for(let i = top; i < bottom; i++) {
            result.push(matrix[i][right - 1]);
        }
        right--;

        if(!(left < right && top < bottom)) {
            break;
        }

        for(let i = right - 1; i >= left; i--) {
            result.push(matrix[bottom - 1][i]);
        }
        bottom--

        for(let i = bottom - 1; i >= top; i--) {
            result.push(matrix[i][left]);
        }
        left++;
    }
};

// [1,2,3,6,9,12,11,10,7,4,5,8]

console.log(spiralOrder([
     [1,2,3,4],
     [5,6,7,8],
    [9,10,11,12]
])
);