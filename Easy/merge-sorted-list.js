/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function(nums1, m, nums2, n) {
//     nums1.splice(m);
//     nums2.splice(n);

//     while(nums2.length) {
//         let item = nums2.shift();
//         for(let i = 0; i < nums1.length; i++) {
//             if(nums1[i] <= item && nums1[i+1] >= item) {
//                 nums1.splice(i+1, 0, item);
//                 item = null;
//             }else if(nums1[i] > item && i === 0) {
//                 nums1.unshift(item);
//                 item = null;
//             }

//             if(item === null) {
//                 break;
//             }
           
//         }

//         if(item !== null) {
//             nums1.push(item);
//         }

//     }
// };

var merge = function(nums1, m, nums2, n) {
    nums1.splice(m);


    let pointer1 = 0;
    let pointer2 = 0;

    while(pointer2 < n) {
        if(nums1[pointer1] <= nums2[pointer2]) {
            pointer1++
        }else {
            nums1.splice(pointer1, 0, nums2[pointer2]);

            pointer1++;
            pointer2++
        }
    }

};