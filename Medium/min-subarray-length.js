
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// var minSubArrayLen = function(target, nums) {

//    let minLength = Number.MAX_SAFE_INTEGER;
//     for(let i = 0; i < nums.length; i++) {
//         let sum = nums[i];
//         for(let j = i; j < nums.length; j++) {
//             if(sum >= target) {
//                 if((j - i) < minLength) {
//                     minLength = (j - i);
//                 }
//             }
//             sum += nums[j];
//         }
//     }

//     return minLength === Number.MAX_SAFE_INTEGER ? 0 : minLength + 1;
// };

var minSubArrayLen = function(target, nums) {
    let left = 0; 

    let sum = 0;
    let minLength = Number.MAX_VALUE;
    
    for(let right = 0; right < nums.length; right++) {
        sum += nums[right];
        while(sum >= target) {
            minLength = Math.min(minLength, right-left + 1);
            sum -= nums[left];
            left++;
        }
    }

    return minLength === Number.MAX_VALUE ? 0 : minLength;
 };

//  var minSubArrayLen = function(t, n) {
//     start=0
//     minLen = Infinity
//     windowSum=0
//     for(let end=0;end<n.length;end++) {
//         windowSum=windowSum + n[end]
//         while(windowSum >= t) {
//             minLen = Math.min(minLen, end-start+1)
//             windowSum = windowSum - n[start]
//             start++
//         }
//     }
//     return minLen === Infinity ? 0 : minLen
// };
 

console.log(minSubArrayLen(4, [1,4,4]))
console.log(minSubArrayLen(15, [1,2,3,4,5]))

