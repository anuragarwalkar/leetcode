var flat = function (arr, n, currentCycle = 0) {
    let result = [];

    if (n === 0) {
        return arr;
    }

    for (let item of arr) {
        if (!Array.isArray(item)) {
            result.push(item);
        } else {
            if (currentCycle < n) {
                result = result.concat(flat(item, n, currentCycle + 1));
            }
        }
    }

    return result;
};

const res = flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1)

console.log('res:', res);