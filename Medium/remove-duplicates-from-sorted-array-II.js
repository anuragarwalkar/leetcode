/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let left = 0; 
    let right = 0;

   while(right < nums.length) {
       let count = 1;

       while(nums[right] === nums[right+1] && nums[right+1] != null) {
           count++;
           right++;
       }

       for(let i = 0; i < Math.min(2, count); i++) {
           nums[left] = nums[right];
           left++;
       }

       right++;
   }

   return left;
};

console.log(removeDuplicates([0,1,1]));