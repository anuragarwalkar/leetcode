/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let top = 0; 
    let bottom = matrix.length - 1;
    let row = 0;

    while(top <= bottom) {
        row = Math.floor((top + bottom) / 2);

        if(target > matrix[row][matrix[row].length - 1]) {
            top = row + 1
        }else if(target < matrix[row][0]) {
            bottom = row - 1;
        }else {
            break;
        }
    }

    if(top > bottom) {
        return false;    
    }

    let start = 0;
    let end = matrix[row].length - 1;

    while(start <= end) {
        let mid = Math.floor((start + end) / 2);
        if(matrix[row][mid] === target) {
            return true;
        }else if(matrix[row][mid] > target){
            end = mid - 1;
        }else{
            start = mid + 1;
        }
    }

    return false;
};



// console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3))
console.log(searchMatrix([[1]], 1))
// console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13))