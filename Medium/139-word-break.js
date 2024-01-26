
// /**
//  * @param {string} s
//  * @param {string[]} wordDict
//  * @return {boolean}
//  */
// var wordBreak = function(s, wordDict) {
//     const wordDictSet = new Set(wordDict);
//     let totalLenght = 0;

//     for(let i = 0; i < s.length;) {
//         let length = 0;
//         for(let j = i; j < s.length; j++) {
//             if(wordDictSet.has(s.slice(i, j + 1))) {
//                 length = (j + 1) - i;
//             }
//         }

//         totalLenght += length; 
//         i += length;
//     }

//     return totalLenght === s.length;
// };

// /**
//  * @param {string} s
//  * @param {string[]} wordDict
//  * @return {boolean}
//  */
var wordBreak = function(s, wordDict) {
    const dp = Array.from({length: s.length + 1 }, () => false);
    dp[s.length] = true;

    for(let i = s.length - 1; i >= 0; i--) {
       for(let w of wordDict) {
        if((i + w.length) <= s.length && s.slice(i, i + w.length) === w) {
            dp[i] = dp[i + w.length];
        }
        if(dp[i]) {
            break;
        }
       }
    }

    return dp[0]
};

// /**
//  * @param {string} s
//  * @param {string[]} wordDict
//  * @return {boolean}
//  */
// function wordBreak(s, wordDict) {
//    function recursion(string, wordDictSet) {
//     if(string.length === 0) {
//         return true;
//     }

//     for(let i = 1; i <= string.length; i++) {
//         if(wordDictSet.has(string.slice(0, i)) && recursion(string.slice(i), wordDictSet)) {
//             return true;
//         }
//     }

//     return false;
//    }

//    return recursion(s, new Set(wordDict));
// }

// /**
//  * Determines whether a given string can be segmented into valid words from a dictionary.
//  * @param {string} s - The input string to be segmented.
//  * @param {Set<string>} wordDict - The dictionary of valid words.
//  * @returns {boolean} - True if the string can be segmented, otherwise false.
//  */
// function wordBreak(s, wordDict) {
//     const n = s.length;
//     const dp = new Array(n + 1).fill(false);
//     dp[0] = true; // An empty string is always a valid word break

//     for (let end = 1; end <= n; end++) {
//         for (let start = 0; start < end; start++) {
//             const word = s.slice(start, end);
//             if (dp[start] && wordDict.has(word)) {
//                 dp[end] = true;
//                 break;
//             }
//         }
//     }

//     return dp[n];
// }

// var wordBreak = function(s, wordDict) {
//     const dp = Array.from({length: s.length + 1 }, () => false);
//     dp[0] = true;

//     for(let i = 0; i < s.length; i++) {
//        for(let w of wordDict) {
//         if(dp[i] && (i + w.length) <= s.length && s.slice(i, i + w.length) === w) {
//             dp[i + w.length] = true;
//         }
//        }
//     }
//     return dp[s.length];
// };


// console.log(wordBreak("leetcode", ["leet","code"]))
// console.log(wordBreak("applepenapple", ["apple","pen"]))
console.log(wordBreak("catsandog", new Set(["cat","dog","sand","an","cats"])))