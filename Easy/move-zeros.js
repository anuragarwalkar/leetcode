/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i = 0;
    let j = 1;

    function swap(index1, index2) {
        const temp = nums[index2];
        nums[index2] = nums[index1];
        nums[index1] = temp;
    }

    while(j < nums.length) {
        if(nums[i] === 0 && nums[j] !== 0) {
            swap(i, j);
            i++;
        }else if(nums[i] !== 0) {
            i++;
        }

        j++
    }

};

var moveZeroes = function(nums) {
    let i = 0;
    let j = 1;

    function swap(index1, index2) {
        const temp = nums[index2];
        nums[index2] = nums[index1];
        nums[index1] = temp;
    }
    
    while(i < nums.length) {
        if(nums[i] !== 0) {
            swap(i, j);
            j++;
        }

        i++
    }
};

// moveZeroes([1,0,1])
moveZeroes([0,1,0,3,12])