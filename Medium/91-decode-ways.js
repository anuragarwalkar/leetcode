/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    const dp = {};

    function dfs(index) {
      if(dp[index]) {
        return dp[index];
      }

      if(index === s.length) {
        return 1;
      }

      if(s[index] === "0") {
        return 0;
      }

      let result = dfs(index + 1)
       
      if(index + 1 < s.length && (s[index] === "1"  || s[index] === "2" && "0123456".includes(s[index + 1]))) {
        result += dfs(index + 2);
      }

      dp[index] = result;

      return result
    }
    const ree = dfs(0)
    console.log('dp:', dp);
};

// console.log(numDecodings("226787"))
// console.log(numDecodings("212132"))
// console.log(numDecodings("12"))
// console.log(numDecodings("226"))
console.log(numDecodings("20121212"))