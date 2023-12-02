/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let slow = 0;
    let fast = 0;


    do {
        slow = nums[slow];
        fast = nums[nums[fast]]
    } while (fast !== slow);


    slow = 0;

    do {
        slow = nums[slow];
        fast = nums[fast];
    } while (slow !== fast);
    

    return slow;
};

// floyd's cycle detection algorithm
console.log(findDuplicate([1, 3, 4, 2, 2]));