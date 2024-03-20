/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
    if (!grid || grid.length === 0) return 0;
  
    const rows = grid.length;
    const cols = grid[0].length;
    let count = 0;
  
    function dfs(row, col) {
      if (
        row < 0 ||
        row >= rows ||
        col < 0 ||
        col >= cols ||
        grid[row][col] === "0"
      ) {
        return;
      }
  
      grid[row][col] = "0"; // Mark current cell as visited
  
      // Visit adjacent cells
      dfs(row + 1, col); // Down
      dfs(row - 1, col); // Up
      dfs(row, col + 1); // Right
      dfs(row, col - 1); // Left
    }
  
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (grid[i][j] === "1") {
          count++;
          dfs(i, j);
        }
      }
    }
  
    return count;
  }
  
  const grid = [["1","1","1","1","1"],["1","1","1","1","1"],["1","1","1","1","1"],["1","1","1","1","1"]]
  
  numIslands(grid);
  