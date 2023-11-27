// https://leetcode.com/problems/container-with-most-water/
// Complexity S: O(1) T: O(N X N)
// function solve(array) {
//   let max = Number.MIN_SAFE_INTEGER;
//   for (let i = 0; i < array.length - 1; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       let height = Math.min(array[i], array[j]);
//       let width = j - i;
//       let area = height * width;
//       max = Math.max(area, max);
//     }
//   }
//   return max;
// }

// Complexity T: O(N) S: O(1)
function solve(array) {
  let max = Number.MIN_SAFE_INTEGER;
  let start = 0;
  let end = array.length - 1;
  for (let i = 0; i < array.length - 1; i++) {
    let width = end - start;
    let height = Math.min(array[start], array[end]);

    max = Math.max(width * height, max);

    if (height === array[start]) {
      start++;
    } else {
      end--;
    }
  }
  return max;
}

// const result = solve([1, 7, 2, 8, 1, 6]);
const result = solve([7, 1, 2, 3, 9]);

console.log("result:", result);


/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let maxArea = 0;

  for(let i = 0; i < height.length; i++){
      for(let j = i + 1; j < height.length; j++) {
          let minHeight = height[i] < height[j] ? height[i] : height[j];
          let width = j - i;
          maxArea = Math.max(maxArea, minHeight * width); 
      }
  }
  return maxArea;
};

var maxArea = function(height) {
  let maxArea = 0;
  let start = 0;
  let end = height.length - 1;

  while(start < end) {
      const minHeight = height[start] < height[end] ?  height[start] : height[end];

      maxArea = Math.max(maxArea, (end - start) * minHeight);

      if(height[start] < height[end]) {
          start++;
      }else {
          end--;
      }
  }

  return maxArea;
};


// console.log(maxArea([1,8,6,2,5,4,8,3,7]));
console.log(maxArea([1,1]));