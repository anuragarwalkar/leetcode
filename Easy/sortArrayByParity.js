/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  const result = [];

  for (const item of nums) {
    if (item % 2 === 0) {
      result.unshift(item);
    } else {
      result.push(item);
    }
  }

  return result;
};

const result = sortArrayByParity([3, 1, 2, 4]);

console.log("result:", result);
