/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const prefix = [nums[0]];
    const postfix = [nums[nums.length - 1]];
    let postfixLast = nums[nums.length - 1];

    const result = [];

    for(let i = 1; i < nums.length; i++) {
        const num = nums[i];
        const reverseNum = nums[nums.length - 1 - i];
        postfixLast *= reverseNum;
        
        prefix.push(prefix[prefix.length - 1] * num);
        postfix.unshift(postfixLast);
    }
    
    for(let i = 0; i < nums.length; i++) {
        result.push((prefix[i - 1] ?? 1) * (postfix[i + 1] ?? 1))
    }

    return result;
};

console.log(productExceptSelf([1,2,3,4]));

