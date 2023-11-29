/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const result = [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            continue;
        }
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let requiredValue = nums[i] + nums[j] + nums[k];

                if (requiredValue === 0) {
                    result.push([nums[i], nums[j], nums[k]]);
                }
            }
        }
    }

    return result;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const result = [];
    const numbersMap = {};
    const combinationUsed = {};

    for(let i = 0; i < nums.length ; i++) {
        numbersMap[nums[i]] = i;
    }

   for(let i = 0; i < nums.length; i++) {

    if(i > 0 && nums[i] === nums[i-1]) {
        continue;
    }

    let start = i + 1;
    let end = nums.length;
    let required;

    if(nums[i] > 0) {
        required = nums[i] * -1;
    }else {
        required = Math.abs(nums[i]);
    }
    let missing
    while(start < end) {
        if(missing === (required - nums[start]) || nums[start] === missing) {
            start++;
            continue;
        }

        missing =  required - nums[start];
        const threeValues = [nums[i], nums[start], missing];
        const isZero = threeValues.reduce((a, b) => a + b, 0) === 0;

        console.log('isZero:', isZero);

        if(numbersMap[missing] != null && numbersMap[missing] !== start && i !== numbersMap[missing] && !combinationUsed[i]) {
            combinationUsed[i] = true;
            result.push([nums[i], nums[start], missing]);
        }
        
        start++;
    }

     
   }
    return result;
};

console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(threeSum([0, 0, 0, 0]));
// console.log(threeSum([0, 0, 0, 0]))
// console.log([2,7,11,15]);
// console.log(twoSum([2, 3, 4], 6));