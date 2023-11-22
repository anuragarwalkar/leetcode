/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const expectedSum = (nums.length * (nums.length + 1)) / 2
    const actualTotal = nums.reduce((a, b) => a + b, 0)
    return expectedSum - actualTotal;
};


var missingNumber = function(nums) {
    let actualXor = 0;

    const numsXor = nums.reduce((acc, curr) => acc ^ curr);

    for(let i = 0; i <= nums.length; i++) {
        actualXor = actualXor ^ i;
    }

    return actualXor ^ numsXor;
};

var missingNumber = function(nums) {
    let sum = 0 
    for(let i = 0; i<nums.length; i++) {
        sum+=i+1-nums[i]
    }
    return sum 
}

console.log(missingNumber([0, 1, 2]))