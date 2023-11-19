const missingRanges = (nums, lower, upper) => {
    const result = [];
    let end = 1;

    for(let i = 0; i < nums.length; i++) {
        if((nums[i] > lower ) && (nums[end] < upper || !nums[end])) {
            result.push([nums[i] + 1, (nums[end] - 1|| upper)]);
        }

        end++;
    }

    return result;
}

// console.log(-1 > -1)
console.log(missingRanges([0,1,3,50,75], 0, 99));