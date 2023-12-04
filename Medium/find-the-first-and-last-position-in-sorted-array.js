/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    function binarySearch (searchArray, target, leftBias = false) {
     let left = 0;
     let right = searchArray.length - 1;
     let index = -1;
 
     while(left <= right) {
         mid = Math.floor((left + right) / 2);
 
         if(searchArray[mid] === target) {
             index = mid;
 
             if(leftBias) {
                 right = mid - 1;
             }else{
                 left = mid + 1;
             }
         }else if(target > searchArray[mid]) {
             left = mid + 1;
         }else {
             right = mid - 1;
         }
     }
 
     return index
    }
    
    const left = binarySearch(nums, target, true);
    const right = binarySearch(nums, target);
 
    return [left, right]; 
 };
 
 
 // console.log(searchRange([1], 1));
 console.log(searchRange([5,7,7,8,8,10], 8));