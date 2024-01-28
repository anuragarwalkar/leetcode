/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const dp = new Map();
    const getKey = (row, column) => `${row}-${column}`
   function recursion(row, column) {
       if(row === triangle.length - 1) {
        return triangle[row][column];
       }

       if(dp.has(getKey(row, column))) {
        return dp.get(getKey(row, column));
       }

       let left = recursion(row + 1, column);
       let right = recursion(row + 1, column + 1);
       const result = triangle[row][column] + Math.min(left, right);
       dp.set(getKey(row, column), result);
       return result;
   }

  return recursion(0, 0)

};

// /**
//  * @param {number[][]} triangle
//  * @return {number}
//  */
// var minimumTotal = function(triangle) {
//     return helper(triangle, 0, 0);
// };

// var helper = function(triangle, row, col) {
//     // Base case: If we reach the bottom of the triangle
//     if (row === triangle.length - 1) {
//         return triangle[row][col];
//     }
    
//     // Recurively calculate the minimum path sum by choosing the minimum of the two adjacent numbers in the next row
//     const leftSum = helper(triangle, row + 1, col);
//     const rightSum = helper(triangle, row + 1, col + 1);
    
//     // Choose the minimum of the two paths and add the current number
//     return Math.min(leftSum, rightSum) + triangle[row][col];
// };

console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]))
console.log(minimumTotal([[-1],[2,3],[1,-1,-3]]))