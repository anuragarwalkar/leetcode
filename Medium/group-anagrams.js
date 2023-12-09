/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const sort = word => word.split('').sort().join('');

var groupAnagrams = function(strs) {
    const duplicateAnagrams = {};

    for(let i = 0; i < strs.length; i++) {
        const sortedValue = sort(strs[i]);

        if(duplicateAnagrams[sortedValue]) {
            duplicateAnagrams[sortedValue].push(strs[i]);
        }else {
            duplicateAnagrams[sortedValue] = [strs[i]];
        }

    }

    return Object.values(duplicateAnagrams);
};

// var groupAnagrams = function(strs) {
//     const result = {};

//     for(let i = 0; i < strs.length; i++) {
//         const count = Array.from({length: 26}, () => 0);
        
//         for(let char of strs[i]) {
//             const charCode = char.charCodeAt(0) - 'a'.charCodeAt(0);
//             count[charCode]++
//         }

//         const data = count.join(',')

//         if(result[data]) {
//             result[data].push(strs[i])
//         }else {
//             result[data] = [strs[i]]; 
//         }
//     }

//    return Object.values(result);
// };

console.log(groupAnagrams(["bdddddddddd","bbbbbbbbbbc"]))
// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))