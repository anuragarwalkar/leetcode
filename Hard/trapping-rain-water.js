// function solve(height) {
//   let total = 0;
//   for (let i = 0; i < height.length; i++) {
//     let leftI = i;
//     let rightI = i;
//     let maxLeft = 0;
//     let maxRight = 0;

//     while (leftI >= 0) {
//       maxLeft = Math.max(maxLeft, height[leftI]);
//       leftI--;
//     }

//     while (rightI < height.length) {
//       maxRight = Math.max(maxRight, height[rightI]);
//       rightI++;
//     }

//     let amount = Math.min(maxLeft, maxRight) - height[i];
//     if (amount > 0) {
//       total += amount;
//     }
//   }
//   return total;
// }

function solve(height) {
  let total = 0;
  let start = 0;
  let end = height.length - 1;
  let maxLeft = 0;
  let maxRight = 0;
  while (start <= end) {
    if (height[start] < height[end]) {
      if (maxLeft > height[start]) {
        total += maxLeft - height[start];
      } else {
        maxLeft = height[start];
      }
      start++;
    } else {
      if (maxRight > height[end]) {
        total += -height[end];
      } else {
        maxRight = height[end];
      }
      end--;
    }
  }
  return total;
}

const result = solve([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);

console.log("result:", result);
