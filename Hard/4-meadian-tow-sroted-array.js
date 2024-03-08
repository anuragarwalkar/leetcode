/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let result = [];

    let i = 0;
    let j = 0;
    while(i < nums1.length && j < nums2.length) {
        if(nums1[i] < nums2[j]) {
            result.push(nums1[i]); 
            i++;
        }else {
            result.push(nums2[j]);
            j++;
        }
    }

    if(j < nums2.length) {
        result.push(...nums2.slice(j));
    }else if(i < nums1.length) {
        result.push(...nums1.slice(i));
    }

    const middle = Math.floor(result.length / 2);
    const isIodd = !!(result.length % 2);

    if(isIodd) {
        return result[middle]
    }else {
        return (result[middle] + result[middle- 1]) / 2
    }
};

console.log(findMedianSortedArrays([1,2], [3, 4]));
// console.log(findMedianSortedArrays([1,5,10], [3, 4, 8, 9])); 