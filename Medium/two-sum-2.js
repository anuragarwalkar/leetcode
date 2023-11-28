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


/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let start = 0;
    let end =  numbers.length - 1;
    
    while(start < end) {
        if((numbers[start] + numbers[end]) === target) {
            return [start + 1,  end + 1]
        }

        if((numbers[start] + numbers[end]) > target) {
            end--;
        }else {
            start++;
        }
    }
};


console.log(twoSum([2,7,11,15],9))