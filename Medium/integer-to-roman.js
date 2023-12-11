/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    const numList = [[1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]]

    let result = ""

    for (let [val, sym] of numList) {
        const romLength = Math.floor(num / val)

        if (!romLength) {
            continue;
        }

        for (let i = 0; i < romLength; i++) {
            result += sym;
        }

        num = num % val;

    }

    return result;
};

console.log(intToRoman(58))
// console.log(intToRoman(58))