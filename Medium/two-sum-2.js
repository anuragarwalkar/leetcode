/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    const numbersIndexMap = {}
    for (let i = 0; i < numbers.length; i++) {
        if (numbersIndexMap[target - numbers[i]] != null) {
            if (numbersIndexMap[i + 1] < numbersIndexMap[target - numbers[i]]) {
                return [i + 1, numbersIndexMap[target - numbers[i]] + 1];
            } else {
                return [numbersIndexMap[target - numbers[i]] + 1, i + 1];
            }
        }
        numbersIndexMap[numbers[i]] = i;
    };
};
