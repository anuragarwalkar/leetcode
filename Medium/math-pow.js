// /**
//  * @param {number} x
//  * @param {number} n
//  * @return {number}
//  */
// var myPow = function (x, n) {
//     if(n === 0) {
//         return 1;
//     }

//    function recursive(x, n) {
//     if(n === 0) {
//         return 1;
//     }

//     if(x === 0) {
//         return 0;
//     }

//     let result = recursive(x * x, Math.floor(n / 2));
//     // result = result * result
//     return n % 2 ? x * result : result;
//    }

//    const power = recursive(x, Math.abs(n))
//    return n < 0 ? 1/power : power;
// };

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n === 0) {
        return 1;
    }

    if (x === 0) {
        return 0;
    }

    const result = myPow(x * x, Math.floor(Math.abs(n) / 2))

    const isExponentNegative = n < 0;

    const returnValue = n % 2 ? result * x : result;

    return isExponentNegative ? 1 / returnValue : returnValue;
}

console.log(myPow(2.00000, -10))
console.log(myPow(2.00000, -2))

