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

    const total = nums.reduce((acc, curr) => acc ^ curr);

    for(let i = 0; i <= nums.length; i++) {
        actualXor = actualXor ^ i;
    }

    return actualXor ^ total;
};

var missingNumber = function(nums) {
    let sum = nums.length;

    for(let i = 0; i<nums.length; i++) {
        sum+= i-nums[i]
    }
    return sum 
}

var missingNumber = function(nums) {
    let sum = nums.length;

    for(let i = 0; i<nums.length; i++) {
        sum+= i-nums[i]
    }
    return sum 
}

var missingNumber = function(nums) {
    let output = 0;

   for(let i = 0; i < nums.length; i++) {
    output ^= nums[i] ^ i + 1
   }

   return output;
}



console.log(missingNumber([0, 1, 2]));


console.log(missingNumber([0, 1, 2]))