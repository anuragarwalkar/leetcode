function solve(n) {
  // p n c
  // 0 1 1 2 3 5 8
  let result = [1];
  let prev = 0;
  let next = 1;
  for (let i = 1; i < n; i++) {
    let nextNext = prev + next;
    prev = next;
    next = nextNext;
    result.push(nextNext);
  }

  return result;
}

function solve(n) {
  if (n <= 1) {
    return n;
  }
  return solve(n - 1) + solve(n - 2);
}

// dynamic programing memoization
function solve(n, memo = []) {
  if (memo[n]) {
    return memo[n];
  }

  if (n <= 1) {
    return n;
  }
  const result = solve(n - 1, memo) + solve(n - 2, memo);
  memo[n] = result;
  return result;
}

// bottom up approach
function solve(n) {
  if (n == 1 || n == 2) {
    return n;
  }
  let result = [1, 1];
  for (let i = 2; i < n + 1; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }

  return result;
}

const result = solve(5);
