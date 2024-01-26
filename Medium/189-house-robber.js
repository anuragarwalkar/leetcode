/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let rob1 = 0;
    let rob2 = 0;

   for (let n of nums) {
       let temp = Math.max(n + rob1, rob2)
       rob1 = rob2
       rob2 = temp
   }
    return rob2
};

// function rob(nums, current = 0) {
//     if (current >= nums.length) {
//         return 0;
//     }

//     // Rob the current house and skip the next one
//     const robCurrentHouse = nums[current] + rob(nums, current + 2);

//     // Skip the current house and move to the next one
//     const skipCurrentHouse = rob(nums, current + 1);

//     // Return the maximum amount between robbing and skipping the current house
//     return Math.max(robCurrentHouse, skipCurrentHouse);
// }

/**
 * Dynamic programming solution for the House Robber problem with recursion.
 * @param {number[]} nums - Array representing the amount of money in each house.
 * @param {number} current - Index of the current house.
 * @param {Map<number, number>} memo - Memoization map to store computed results.
 * @returns {number} - Maximum amount of money that can be robbed.
 */
function robDynamicProgrammingRecursion(nums, current, memo) {
    if (current >= nums.length) {
        return 0;
    }

    // Check if the result is already memoized
    if (memo.has(current)) {
        return memo.get(current);
    }

    // Rob the current house and skip the next one
    const robCurrentHouse = nums[current] + robDynamicProgrammingRecursion(nums, current + 2, memo);

    // Skip the current house and move to the next one
    const skipCurrentHouse = robDynamicProgrammingRecursion(nums, current + 1, memo);

    // Return the maximum amount between robbing and skipping the current house
    const result = Math.max(robCurrentHouse, skipCurrentHouse);

    // Memoize the result
    memo.set(current, result);

    return result;
}

// Wrapper function to initialize memoization map
function rob(nums) {
    const memo = new Map();
    return robDynamicProgrammingRecursion(nums, 0, memo);
}

// console.log(rob([1,2,3,1]))
// console.log(rob([2,7,9,3,1]))
console.log(rob([2,1,1,2]))