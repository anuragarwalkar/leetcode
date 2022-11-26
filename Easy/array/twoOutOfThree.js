/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (...args) {
  const finalObject = {};

  for (let i = 0; i < args.length; i++) {
    const temp = {};
    for (let j = 0; j < args[i].length; j++) {
      const item = args[i][j];

      if (!temp[item]) {
        finalObject[item] = finalObject[item] + 1 || 1;
      }
      temp[item] = 1;
    }
  }

  const result = [];

  for (let item of Object.keys(finalObject)) {
    if (finalObject[item] > 1) {
      result.push(parseInt(item));
    }
  }

  return result;
};
