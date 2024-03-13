// Construct Quad Tree

function Node(val, isLeaf, topLeft, topRight, bottomLeft, bottomRight) {
    this.val = val === undefined ? false : val;
    this.isLeaf = isLeaf === undefined ? false : isLeaf;
    this.topLeft = topLeft === undefined ? null : topLeft;
    this.topRight = topRight === undefined ? null : topRight;
    this.bottomLeft = bottomLeft === undefined ? null : bottomLeft;
    this.bottomRight = bottomRight === undefined ? null : bottomRight;
  }
  
  /**
   * @param {number[][]} grid
   * @return {Node}
   */
  var construct = function (grid) {
    function isLeaf(r, c, length) {
      let value = grid[r][c];
      
      for (let currentRow = r; currentRow < r + length; currentRow++) {
        for (let currentColumn = c; currentColumn < c + length; currentColumn++) {
          if (value !== grid[currentRow][currentColumn]) {
            return false;
          }
        }
      }
  
      return true;
    }
  
    function recurssion(r, c, length) {
      if (isLeaf(r, c, length)) {
        return new Node(grid[r][c], true);
      } else {
        const half = length / 2;
        return new Node(
          grid[r][c],
          false,
          recurssion(r, c, half),
          recurssion(r, c + half, half),
          recurssion(r + half, c, half),
          recurssion(r + half, c + half, half)
        );
      }
    }
  
    return recurssion(0, 0, grid.length);
  };
  
  const result = construct([
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 0, 0, 0, 0],
  ]);
  
  console.log("result:", result);
  