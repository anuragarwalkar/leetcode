/**
 * @param {string} digits
 * @return {string[]}
 */

var letterCombinations = function(digits) {
    if(!digits) {
        return [];
    }
    const letterCombinationsMap = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]

   function backtracking(array, index = 0, str = "") {
    if(str.length >= digits.length) {
        return str;
    }

    let resultArray = [];
    
    for(let i = 0; i < array[digits[index] - 2].length; i++) {
        const backtrackResult = backtracking(array, index + 1,  str + array[digits[index] - 2][i]);
        resultArray.push(...Array.isArray(backtrackResult) ? backtrackResult : [backtrackResult]);
    }

    return resultArray;
   }


   return backtracking(letterCombinationsMap)
};  

var letterCombinations = function(digits) {
    if(!digits) {
        return [];
    }

    const digitToLetters = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    }

   function backtracking(index = 0, str = "") {
    if(str.length >= digits.length) {
        return str;
    }

    let resultArray = [];
    
    for(let i = 0; i < digitToLetters[digits[index]].length; i++) {
        const backtrackResult = backtracking(index + 1,  str + digitToLetters[digits[index]][i]);
        resultArray.push(...Array.isArray(backtrackResult) ? backtrackResult : [backtrackResult]);
    }

    return resultArray;
   }


   return backtracking()
}; 

// var letterCombinations = function(digits) {
//     if (!digits.length) {
//         return [];
//     }
    
//     const digitToLetters = {
//         '2': 'abc',
//         '3': 'def',
//         '4': 'ghi',
//         '5': 'jkl',
//         '6': 'mno',
//         '7': 'pqrs',
//         '8': 'tuv',
//         '9': 'wxyz'
//     };
    
//     const res = [];
    
//     function backtrack(idx, comb) {
//         if (idx === digits.length) {
//             res.push(comb);
//             return;
//         }
        
//         for (const letter of digitToLetters[digits[idx]]) {
//             backtrack(idx + 1, comb + letter);
//         }
//     }
    
//     backtrack(0, "");
    
//     return res;    
// };

console.log(letterCombinations("234").length, 3 ** 3 );
