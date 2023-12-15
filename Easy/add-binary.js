/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let result = "";
    let carry = 0;

    for(let i = 0; i < Math.max(a.length, b.length); i++) {
        let total = +(a[a.length - i - 1] ?? 0) + +(b[b.length - i - 1] ?? 0) + carry;
        result =  (total % 2) + result;
        carry = Math.floor(total / 2);
    }

    if(carry) {
        result = "1" + result;
    }

    return result;
};


console.log(addBinary("1010", "1011"))