/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let pointer1 = 0;
    for(let pointer2 = 1; pointer2 < nums.length; pointer2++) {
        if(nums[pointer1] !== nums[pointer2]) {
            pointer1++;
            nums[pointer1] = nums[pointer2];
        }
    }

    return nums;
}

console.log(removeDuplicates([1,1,1,2]));