// var longestCommonPrefix = function(strs) {
//    let longestPrefix = "";
//    let compare = strs[0]

//     if(strs.length === 1) {
//         return strs[0];
//     }

//     loop1:
//     for(let i = 0; i < compare.length; i++) {
//         let char = compare[i];
//         for(let j = 1; j < strs.length; j++) {
//             if(strs[j][i] !== char) {
//                 break loop1;
//             }

//             if(strs.length === j + 1) {
//                 longestPrefix += char;
//             }
//         }

//     }

//    return longestPrefix;
// };

var longestCommonPrefix = function (strs) {
    let longestPrefix = "";
    let pointer = 0;
    let compare = strs[0][pointer];
    loop1:
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][pointer] !== compare) {
                break loop1;
            }
        }
        longestPrefix += compare;
        pointer++;
        compare = strs[0][pointer];
    }

    return longestPrefix;
};

console.log(longestCommonPrefix(["a"]))
// console.log(longestCommonPrefix(["dog","racecar","car"]))
// console.log(longestCommonPrefix(["flower","flow","flight"]))
// console.log(longestCommonPrefix(["flower", "flower", "flower", "flower"]))