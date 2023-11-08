/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
    const result = [];
    let curRow = 0;
    let curCol = 0;
    let forwardTraversal = true;

    if((rowsCount * colsCount) != this.length) {
        return [];
    }

    if((rowsCount * colsCount) !== this.length) {
        for (let index = 0; index < this.length; index++) {
            if(!result[curRow]) {
                result[curRow] = [];
            }
            result[curRow][curCol] = this[index];
            curCol++;
        }

        return result;
    }


    for (let i = 0; i < this.length; i++) {
        if(!result[curRow]) {
            result[curRow] = [];
        }
        result[curRow][curCol] = this[i];

        if ((i + 1) % (this.length / colsCount) === 0) {
            curCol++;
            curRow = forwardTraversal ? rowsCount - 1 : 0;
            forwardTraversal = !forwardTraversal;
            continue;
        }

        if (forwardTraversal) {
            curRow++;
        } else {
            curRow--;
        }
    }

    return result;
}