// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var longestConsecutive = function(nums) {
//     if(!nums.length) {
//         return 0;
//     }

//     const subsequence = {}

//     nums.sort((a, b) => b - a);

//     let longestSubsequence = Number.MIN_VALUE;

//     for(let i = 0; i <= nums.length; i++) {
//         let num = nums[i];

//         if(subsequence[num + 1] != null) {
//             subsequence[num] = subsequence[num + 1] + 1;
//             delete subsequence[num + 1];
//         }else if(!subsequence[num]) {
//             subsequence[num] = 1;
//         }
//     }

//     for(let key in subsequence) {
//         longestSubsequence = Math.max(longestSubsequence, subsequence[key]);
//     }

//     return longestSubsequence;
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(!nums.length) {
        return 0;
    }

    const uniqueNums = new Set([...nums]);

    let longestSubsequence = Number.MIN_VALUE;

    for(let num of nums) {
        let length;
        if(!uniqueNums.has(num - 1)) {
            length = 0;
            while(uniqueNums.has(num + length)) {
                length++;
            }
            longestSubsequence = Math.max(length, longestSubsequence)
        }
    }

    return longestSubsequence;
};

console.log(longestConsecutive([100,4,200,1,3,2]))
// console.log(longestConsecutive([0]))
// console.log(longestConsecutive([0,0,-1]))
// console.log(longestConsecutive([4,0,-4,-2,2,5,2,0,-8,-8,-8,-8,-1,7,4,5,5,-4,6,6,-3]))