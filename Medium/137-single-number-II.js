/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0;

    for(let i = 0; i < 32; i ++) {
        let sum = 0;
        for(let j = 0; j < nums.length; j++) {
           sum += (nums[j] >> i) & 1 === 1
        }
        sum %= 3
        if(sum != 0) {
            result |= sum << i;
        }
        
    }

    return result;
};

console.log(singleNumber([2, 2, 3, 2]))