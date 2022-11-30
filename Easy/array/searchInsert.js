/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function (nums, target) {
    const divide = Math.floor(nums.length / 2);
    let start = 0;
    let end = nums.length;
  
    if (target <= nums[divide]) {
      start = 0;
      end = divide;
    } else {
      start = divide;
    }
  
    for (let i = start; i <= end; i++) {
      if (target === nums[i] || target < nums[i]) {
        return i;
      }
    }
  
    return nums.length;
  };
  
  
  const testData = [
    { data: [[1, 3, 5, 6], 5], expected: 2 },
    { data: [[1, 3, 5, 6], 2], expected: 1 },
    { data: [[1, 3, 5, 6], 0], expected: 0 },
    { data: [[1, 3, 5, 6], 7], expected: 4 },
    { data: [[1], 0], expected: 0 },
    { data: [[1], 2], expected: 1 },
  ];
  
  function testing(data) {
     return data.every(i => searchInsert(...i.data) === i.expected)
  }
  
  console.log('Test Passed',testing(testData))
  
  
  