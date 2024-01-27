/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    const dpKey = (row, column) => `${row}-${column}`
    const dpCache = new Map();
    
    function recursionHelper(grid, row, column) {
        if(row >= m || column >= n || grid[row][column] !== 0) {
            return 0;
        }

        if(row === grid.length - 1 && column === grid[0].length - 1) {
            return 1;
        }

        if(dpCache.has(dpKey(row, column))) {
            return dpCache.get(dpKey(row, column));
        }

        // go right
        let rightPath = recursionHelper(grid, row, column + 1);

        // go left
        let leftPath = recursionHelper(grid, row + 1, column);

        dpCache.set(dpKey(row, column), leftPath + rightPath);

        return leftPath + rightPath
    }
    return recursionHelper(obstacleGrid, 0, 0);
};

// console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]));
// console.log(uniquePathsWithObstacles([[0,0,0,0,0],[0,0,0,0,1],[0,0,0,1,0],[0,0,1,0,0]]));
console.log(uniquePathsWithObstacles([[0,0,0,0,0],[0,0,0,0,1],[0,0,0,1,0],[0,0,0,0,0]]));
