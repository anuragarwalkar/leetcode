/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1; 
    
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);

        if(nums[mid] === target) {
            return mid;
        }

        // Left sorted array
        if(nums[left] <= nums[mid]) {
            if(target >= nums[left] && target < nums[mid]) {
                right = mid - 1;
               }else {
                left = mid + 1
               }
        }else { // Right sorted array
            if(target > nums[mid] && target <= nums[right]) {
                left = mid + 1;
            }else {
                right = mid - 1;
            }
        }
    }
    
    return -1;
};

var search = function(nums, target) {

    function recursive(left, right) {
        if(left > right) {
            return -1;
        }

        let mid = Math.floor((left + right) / 2);

        if(nums[mid] === target) {
            return mid;
        }

        // Left sorted array
        if(nums[left] <= nums[mid]) {
            if(nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            }else {
                left = mid + 1;
            }
        }else { //right sorted array
            if(nums[mid] > target && nums[right] <= target) {
                left = mid + 1;
            }else {
                right = mid - 1;
            }
        }

        return recursive(left, right);
    }

    return recursive(0, nums.length - 1);
};

console.log(search([5,1,3], 5))
console.log(search([4,5,6,7,0,1,2,3], 0 ))