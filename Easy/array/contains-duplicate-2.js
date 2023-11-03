// var containsNearbyDuplicate = function (nums, k) {
//     for (let i = 0; i <= nums.length - 1; i++) {
//         let j = nums.length - 1;
//         while (i < j) {
//             if (nums[i] == nums[j] && Math.abs(i - j) <= k) {
//                 return true
//             }
//             j--;
//         }

//     }
//     return false
// };

var containsNearbyDuplicate = function (nums, k) {
    const object = {};
    for (let i = 0; i < nums.length; i++) {
        if (object[nums[i]] != undefined && Math.abs(object[nums[i]] - i) <= k) {
            return true;
        } else {
            object[nums[i]] = i;
        }
    }

    return false;
};

const res = containsNearbyDuplicate([1, 0, 1, 1], 1);

console.log('res:', res);