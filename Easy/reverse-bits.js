/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let result = 0;

    for(let i = 0; i < 32; i++) {
        const bit = (n >>> i) & 1;
        result = (result | bit << (31 - i))  >>> 0
    }

    return result;
};


console.log(reverseBits(4294967293))
console.log((-111).toString(2));
console.log(parseInt("10111111111111111111111111111111", 2))