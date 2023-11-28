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

    nums.sort((a, b) => a - b);

   for(let i = 0; i < nums.length; i++) {

    if(i > 0 && nums[i] === nums[i-1]) {
        continue;
    }

    let start = i + 1;
    let end = nums.length - 1;

    while(start < end) {
        const total = nums[i] + nums[start] + nums[end];

        if(total > 0) {
            end--;
        }else if(total < 0) {
            start++;
        }else{
            result.push([nums[i], nums[start], nums[end]]);
            end--;
            while(nums[end] === nums[end - 1] && start < end) {
                end--;
            }
        }
    }
     
   }

    return result;
};



console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(threeSum([0, 0, 0, 0]));
// console.log(threeSum([0, 0, 0, 0]))
// console.log([2,7,11,15]);
// console.log(twoSum([2, 3, 4], 6));