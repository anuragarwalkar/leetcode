/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const result = [[1]];

    for(let row = 1; row < numRows; row++) {
        const totalColumns = row + 1;

        result[row] = Array.from({length: totalColumns}, (_, column) => {
            // columns previous row current column-index (plus +) column - 1
            return (result[row-1][column] ?? 0) + (result[row-1][column-1] ?? 0)
        });
    }

    return result
};


console.log(generate(5));