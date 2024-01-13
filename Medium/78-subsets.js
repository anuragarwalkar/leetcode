/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const res = [];

    const subset = [];

    function dfs(index) {
      if(index >= nums.length) {
        res.push([...subset]);
        return;
      }

      subset.push(nums[index]);
      dfs(index + 1);

      subset.pop();
      dfs(index + 1);
    }

    dfs(0);

    return res;
};

var subsets = function(nums) {
  const output = [[]];

  for (const num of nums) {
      const len = output.length;
      for (let i = 0; i < len; i++) {
          const list = output[i];
          output.push([...list, num]);
      }
  }

  return output;
};

console.log(subsets([1,2,3]))