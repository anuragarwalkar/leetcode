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



console.log(threeSum([-1,0,1,2,-1,-4]))
// console.log(threeSum([0, 0, 0, 0]))
// console.log([2,7,11,15]);
// console.log(twoSum([2, 3, 4], 6));