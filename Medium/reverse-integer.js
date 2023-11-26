/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const data = x.toString().split('').reverse();

    if (x < 0) {
        data.pop();
    }

    const result = parseInt(data.join(''));

    if(result.toString(2).length >= 32) {
        return 0;
    }

    return x < 0 ? -result : result;
};

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let result = 0;

    while(x) {
        const rightMostDigit = x % 10;
        x = parseInt(x / 10);
        result = (result * 10) + rightMostDigit;
    }

    if(result > Math.pow(2, 31) || result < Math.pow(-2, 31)) {
        return 0;
    }

    return result;
};


console.log(reverse(-2147483412));
console.log(reverse(1563847412));