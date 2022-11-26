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
