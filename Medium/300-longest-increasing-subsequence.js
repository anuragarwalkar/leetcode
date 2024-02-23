/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const lis = Array.from({length: nums.length}, () => 1); 

    for(let i = nums.length - 1; i >= 0; i--) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] < nums[j]) {
                lis[i] = Math.max(lis[i], 1 + lis[j])
            }
        }
    }

    return Math.max(...lis);
};

console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));
console.log(lengthOfLIS([0,1,0,3,2,3]));

