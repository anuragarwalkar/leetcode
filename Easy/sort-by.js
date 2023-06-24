/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
};


const result = sortBy([{"x": 1}, {"x": 0}, {"x": -1}], (d) => d.x)

console.log('result:', result);