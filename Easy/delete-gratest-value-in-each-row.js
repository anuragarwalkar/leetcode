/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    const [firstRow] = grid;
    let maxValueInRow = 0;
    
    if(firstRow.length === 0) {
        return maxValueInRow;
    }

    for(let r = 0; r < grid.length; r++) {
        let rowMaxValue = Number.MIN_VALUE;

        let maxIndexColumn = null;
        for(let c = 0; c < grid[r].length; c++) {
            if(grid[r][c] > rowMaxValue) {
                rowMaxValue = grid[r][c];
                maxIndexColumn = c;
            }
            
        }
        grid[r].splice(maxIndexColumn, 1);
        maxValueInRow = Math.max(maxValueInRow, rowMaxValue);

    }

    return deleteGreatestValue(grid) + maxValueInRow;
};



// console.log(deleteGreatestValue([[1,2,4],[3,3,1]]))
console.log(deleteGreatestValue([[9,81],[33,17]]))