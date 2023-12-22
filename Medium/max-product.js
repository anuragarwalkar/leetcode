/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = Number.MIN_VALUE;

    let secondLastMax = Number.MIN_VALUE;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] >= max) {
            max = nums[i];
        }
    }

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] >= secondLastMax && max !== nums[i]) {
            secondLastMax = nums[i];
        }
    }

    return (secondLastMax - 1) * (max - 1) 
};


console.log(maxProduct([10,2,5,2]))