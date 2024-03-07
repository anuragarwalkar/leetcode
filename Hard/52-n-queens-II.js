var totalNQueens = function (n) {
    let col = new Set();
    let posDiag = new Set(); // (r + c)
    let negDiag = new Set(); // (r - c)
    let result = 0;

    function backtrack(r) {
        if (r === n) {
            result++;
            return;
        }

        for (let c = 0; c < n; c++) {
            if (col.has(c) || posDiag.has(r + c) || negDiag.has(r - c)) {
                continue;
            }

            col.add(c);
            posDiag.add(r + c);
            negDiag.add(r - c);
            backtrack(r + 1);

            col.delete(c);
            posDiag.delete(r + c);
            negDiag.delete(r - c);
        }
    }
    backtrack(0);
    return result;
};


// Example usage:
const n = 4;
const solutions = totalNQueens(n);
console.log(`Total solutions for ${n}-Queens:`, solutions.length);
console.log("Solutions:", solutions);
