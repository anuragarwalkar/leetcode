/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let l = 0; let r = nums.length -1;

    while(l <= r) {
        let m = Math.floor((l + r) / 2)

        if(m < nums.length - 1 && nums[m+1] > nums[m]) {
            l = m + 1;
        }else if(m > 0 && nums[m-1] > nums[m]){
            r = m - 1;
        }else {
            return m;
        }
    }
};

console.log(findPeakElement([1,2,3,1]));