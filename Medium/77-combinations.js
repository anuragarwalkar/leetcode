/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const result = [];

    function dfs(numbers, combinations, depth) {
        if(depth === k) {
            result.push(combinations);
            return;
        }
        for(let i = 0; i < numbers.length; i++) {
            dfs([...numbers.slice(i+1)], [...combinations, numbers[i]], depth + 1); 
        }
    }

    dfs(Array.from({length: n}, (_, i) => i + 1), [], 0);
   return result;
};

combine(4, 2)