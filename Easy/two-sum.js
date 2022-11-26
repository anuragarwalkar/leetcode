// https://leetcode.com/problems/two-sum/
// Complexity T: O(NxN) S: O(1)
function twoSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    let numberToFind = array[i] - target;
    for (let j = i + 1; j < array.length; j++) {
      if (numberToFind === target) {
        return [i, i + 1];
      }
    }
  }
}

// Complexity T: O(N) S: O(N)
function twoSum(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const value = map[nums[i]];
    if (value != undefined) {
      return [value, i];
    } else {
      let ntf = target - nums[i];
      map[ntf] = i;
    }
  }
  return null;
}

const result = twoSum([2, 7, 11, 15], 9);

console.log("result:", result);
