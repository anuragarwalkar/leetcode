/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var permute = function(nums) {
//     const result = [];

//    if(nums.length === 1) {
//     return [[...nums]];
//    }

//     nums.forEach(() => {
//         const n = nums.shift()
//         const perms = permute(nums)

//         for(let perm of perms) {
//             perm.push(n);
//         }
//         result.push(...perms)
//         nums.push(n);
//     })

//    return result;

// };

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const output = [];

    /**
     * @param {number[]} curr
     * @param {number[]} rest
     */
    const dfs = (curr, rest) => {
        // base case. Found a permutation because there's nothing else to explore.
        if (rest.length === 0) {
            output.push(curr);
            return;
        }
        for (let i = 0; i < rest.length; i++) {
            dfs([...curr, rest[i]], [...rest.slice(0, i), ...rest.slice(i + 1)]);
        }
    }
    dfs([], nums);

    return output;
};

console.log(permute([1, 2, 3]))