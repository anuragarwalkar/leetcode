/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    const result = [];

    const numsMap = new Map();

    for (const num of nums1) {
        numsMap.set(num, (numsMap.get(num) ?? 0) + 1)
    }

    for (const num of nums2) {
        const numCount = numsMap.get(num);

        if (numCount > 0) {
            result.push(num);
            numsMap.set(num, numCount - 1);
        }
    }

    return result;
};


console.log(intersect([1, 2, 2, 1], [2, 2]))
console.log(intersect([1, 2, 2, 1], [2]))
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]))

