/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// var combinationSum = function(candidates, target) {
//     const result = [];

//     function backtrack(currentSum = 0, currentCombination = [], index = 0) {
//         if(currentSum > target) {
//             return;
//         }
    
//         if(currentSum === target) {
//             result.push([...currentCombination]);
//             return;
//         }
    
//         for(let i = index; i < candidates.length; i++) {
//             currentCombination.push(candidates[i]);
//             backtrack(currentSum + candidates[i], currentCombination, i);
//             currentCombination.pop();
//         }
//     }

//     backtrack()
//     return result;
// };

var combinationSum = function(candidates, target) {
    const result = [];

    function dfs(index, currentPath, currentSum) {
        if(currentSum === target) {
            result.push([...currentPath]);
            return
        }
        
        if(currentSum > target || index >= candidates.length) {
            return;
        }
        currentPath.push(candidates[index]);
        dfs(index, currentPath, currentSum + candidates[index]);
        currentPath.pop();
        dfs(index + 1, currentPath, currentSum);
    }

    dfs(0, [], 0)

    return result;
};

console.log(combinationSum([2,3,6,7], 7))
// console.log(combinationSum([2, 3, 5], 8))