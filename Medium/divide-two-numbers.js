var divide = function(dividend, divisor) {
    if (dividend === 0 || divisor === 0) return 0;

    let isNegative = (divisor < 0 || dividend < 0) && !(divisor < 0 && dividend < 0);
    let result = 0;

    // Converting negative to positive
    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)

    while(divisor <= dividend) {
        let value = divisor;
        let multiple = 1;
        while(value + value <= dividend) {
            value += value;
            multiple += multiple;
        } 

        dividend -= value;
        result += multiple;
    }

    if(result > (2 ** 31 - 1 )) {
        return isNegative ? -result: result - 1;
    }
    
    return isNegative ? -result : result;
};

var divide = function(dividend, divisor) {
    if (dividend === 0 || divisor === 0) return 0;

    let isNegative = (divisor < 0 || dividend < 0) && !(divisor < 0 && dividend < 0);
    let result = 0;

    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
   
    while(divisor <= dividend) {
        let multiply = 1;
        let tempDividend = dividend;
        let tempDivisor = divisor;

        while(tempDivisor < tempDividend >> 1) {
            multiply <<= 1;
            tempDividend >>= 1;
            tempDivisor <<= 1;
        }
        result += multiply;
        dividend -= tempDivisor;

    }

    if(result > 2 ** 31 - 1) {
        return isNegative ? -result : result - 1;
    }

   return isNegative ? -result : result;
};

// console.log(divide(10, 3))
console.log(divide(-2147483648, 1))