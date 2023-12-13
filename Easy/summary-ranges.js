/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const result = [];
    let innerStr = "";
    
    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const nextNumber = num + 1;

            if(nextNumber === nums[i+1] && innerStr.length === 0) {
                    innerStr += `${num}->`
            }else if(nextNumber !== nums[i+1]) {
                innerStr += nums[i];
                result.push(innerStr);
                innerStr = ""
            }
    }

    return result
};

console.log(summaryRanges([0,2,3,4,6,8,9]));