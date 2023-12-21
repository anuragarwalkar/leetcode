/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var sortColors = function(nums) {
//     let map = {

//     }

//     for(let num of nums) {
//         map[num] = (map[num] ?? 0) + 1
//     }


//     let counter = 0;

//     for(let key in map) {
//         for(let i = 0; i < map[key]; i++) {
//             nums[counter] = Number(key);
//             counter++
//         }
//     }
// };



 
var sortColors = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    function swap(i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
    }

    let i = 0;
    while(i <= right) {
        if(nums[i] === 0) {
            swap(left, i);
            left++;
        }else if(nums[i] === 2) {
            swap(i, right);
            right--;
            i--;
        }
        i++;
    }

    return nums;
};

console.log(sortColors([1,2,0]))