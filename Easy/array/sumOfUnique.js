/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
  const numsObj = nums.reduce((a, b) => {
    const existingVal = a.get(b);
    a.set(b, existingVal ? existingVal + 1 : 1);
    return a;
  }, new Map());

  const numsObjKeys = numsObj.keys();

  let total = 0;

  for (const item of numsObjKeys) {
    if (numsObj.get(item) === 1) {
      total += parseInt(item);
    }
  }

  return total;
};

const result = sumOfUnique([1, 2, 3, 2]);

console.log("result:", result);
