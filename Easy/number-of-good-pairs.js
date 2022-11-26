function solve(nums) {
  let count = 0;
  const map = {};

  for (const number of nums) {
    if (map[number]) {
      count += map[number];
      map[number] += 1;
    } else {
      map[number] = 1;
    }
  }

  return count;
}

function solve(nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++;
      }
    }
  }

  return count;
}

const result = solve([1, 2, 3, 1, 1, 3]);

console.log("result:", result);
