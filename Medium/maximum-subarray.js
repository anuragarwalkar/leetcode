// var maxSubArray = function (nums) {
//     if(nums.length === 1) {
//         return nums[0];
//     }
    
//     let maxSum = Number.MIN_SAFE_INTEGER;

//     for (let i = 0; i < nums.length; i++) {
//         let temp = nums[i];
//         for (let j = i + 1; j < nums.length; j++) {
//             temp += nums[j]
//             maxSum = Math.max(temp, maxSum);
//         }
//     }

//     return maxSum;
// };

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var maxSubArray = function (nums) {
//     let maxSum = 0;
//     let sum = 0;
//     const maxSubArray = {};
//     let start = 0;

//     for (let end = 0; end < nums.length; end++) {
//         sum += nums[end];

//         if (sum < 0) {
//             start = end + 1;
//             sum = 0;
//             continue;
//         }

//         if (sum > maxSum) {
//             maxSum = sum;
//             maxSubArray[maxSum] = [start, end + 1];
//         }

//     }

//     return nums.slice(...maxSubArray[maxSum])
// };

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let maxSum = Number.MIN_SAFE_INTEGER;
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        maxSum = Math.max(sum, maxSum);

        if (sum < 0) {
            sum = 0;
        }
    }

    return maxSum
};


console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
// console.log(maxSubArray([-1]))
// console.log(maxSubArray([100, 200, 200, 1000,-500,-1000,10000,5000,2000]))
