
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {

    function helper() {
        for(let r = 0; r < grid.length; r++) {
           
        }
    }

    helper();
};

minPathSum([[1,3,1],[1,5,1],[4,2,1]]);

function isValidPath (matrix, row, column) {
    if (row <= (matrix.length - 1) && column <= (matrix[0].length - 1) ) {
        return true;
    }
    return false;
}

function findPaths(matrix, row, column, pathSum, result) {
        if(matrix.length - 1 === row && matrix[0].length - 1 === column) {
            result.push(pathSum);
            return;
        }

        // go right
        if(isValidPath(matrix, row, column + 1)) {
            findPaths(matrix, row, column + 1, pathSum + matrix[row][column + 1], result);
        }

        if(isValidPath(matrix, row + 1, column)) {
            findPaths(matrix, row + 1, column, pathSum + matrix[row + 1][column], result);
        }
}

function printAllPaths(matrix) {
    const result = [];
   
    findPaths(matrix, 0, 0, matrix[0][0], result);
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let m = grid.length;
    let n =  grid[0].length;

    for(let c = 1; c < n; c++) {
        grid[0][c] = grid[0][c] + grid[0][c-1];
    }

    for(let r = 1; r < m; r++) {
        grid[r][0] = grid[r][0] + grid[r-1][0];
    }

    for(let r = 1; r < m; r++) {
        for(let c = 1; c < n; c++) {
            grid[r][c] += Math.min(grid[r-1][c], grid[r][c-1]) 
        }
    }

    return grid[m -1][n -1]
};

// Example usage:
const matrix =  [[1,3,1],[1,5,1],[4,2,1]]

console.log(minPathSum(matrix))