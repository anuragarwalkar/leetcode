/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let result = n;

    for(let i = n - 1; i > 0 ; i--) {
        result *= i;
    }

    console.log('result:', result);

    let zeros = 0;

    while(result != 0) {
        if(result % 10 === 0) {
            zeros++;
        }

        result = Math.floor(result / 10);
    }

    return zeros
};

/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let zeroes = 0;

    if (!n || n < 5) {
        return zeroes;
    }

    let factor = 5;
    while (factor <= n) {
        zeroes += Math.floor(n / factor);
        factor *= 5;
    }

    return zeroes;
};

console.log(trailingZeroes(28))