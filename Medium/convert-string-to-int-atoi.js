/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let base = 0; let sign = 1; let i = 0;
    const intMaxRange = Math.pow(2, 31);

    while (s[i] === " ") {
        i++;
    }

    if (s[i] == '-' || s[i] == '+') {
       sign = s[i] === "-" ? -1 : 1
       i++
    }

    const getCharBetweenRange = () => {
        const charCode = s[i]?.charCodeAt(0);
        const baseCarCode = '0'.charCodeAt(0);
        return charCode - baseCarCode >= 0 && charCode - baseCarCode <= 9;
    };

    while (getCharBetweenRange()) {
        base = (base * 10) + (s[i] - 0);
        i++;
    }

    const result = base * sign;

    if (sign === -1 && base > intMaxRange) {
        return -intMaxRange;
    }

    if (result > intMaxRange - 1) {
        return intMaxRange - 1;
    }

    return result;
};

console.log(myAtoi("-91283472332"))
// console.log(myAtoi("4193 with words"))