/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var canJump = function(nums) {
//     const cache = {};
//     function recurssion(start) {
//         counter ++
//         if(cache[start] != null) {
//             return cache[start];
//         }

//         let result = false;

//         if((nums.length - 1) === start) {
//             return true;
//         }

//         for(let i = 1; i <= nums[start]; i++) {
//             if(!result) {
//                 result = recurssion(start + i)
//             }
//         }

//         return result;
//     }


//     return recurssion(0);
// };

//  function canJump(nums) {
//     let goal = nums.length - 1;

//     for(let i = nums.length - 1; i >= 0; i--) {
//         if(i + nums[i] >= goal) {
//             goal = i;
//         }
//     }

//     return goal === 0;
//  }

function canJump(nums) {
    let maxReach = 0;

    for (let i = 0; i < nums.length; i++) {
        // If the current position is unreachable
        if (i > maxReach) {
            return false;
        }

        // Update the maximum reachable position
        maxReach = Math.max(maxReach, i + nums[i]);

        // If the last index is reachable
        if (maxReach >= nums.length - 1) {
            return true;
        }
    }

    return false;
}

// console.log(canJump([2,0,0]))
// console.log(canJump([0]))
// console.log(canJump([2,0]))
console.log(canJump([2,3,1,1,4]))
// console.log(canJump([3,2,1,0,4]))
// console.log('counter:', counter);