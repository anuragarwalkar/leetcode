/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// var coinChange = function (coins, amount) {
//   if (!amount) {
//     return 0;
//   }
//   coins.sort((a, b) => b - a)
//   function recursion(remaning = amount, path = "") {
//     if (remaning < 0) {
//       return;
//     }
//     if(remaning === 0) {
//         console.log(path)
//         return;
//     }
//     for (let i = 0; i < coins.length; i++) {
//         console.log(coins[i]);
//         path = path ? `${path}-${coins[i]}` : `${coins[i]}`; 
//         recursion(remaning - coins[i], path);
//     }
//   }

//   recursion();
// };

// function coinChange(coins, amount) {
//     const memo = new Map();

//     function minCoinsRecursive(target) {
//         if (target === 0) return 0;
//         if (target < 0) return -1;
//         if (memo.has(target)) return memo.get(target);

//         let minCoins = Infinity;

//         for (let coin of coins) {
//             const result = minCoinsRecursive(target - coin);
//             if (result >= 0) {
//                 minCoins = Math.min(minCoins, result + 1);
//             }
//         }

//         const finalResult = minCoins === Infinity ? -1 : minCoins;
//         memo.set(target, finalResult);
//         return finalResult;
//     }

//     return minCoinsRecursive(amount);
// }

function coinChange(coins, amount) {
    let memo = new Map();
    // Define a helper function for recursion
    function helper(target) {
        // Base cases
        if (memo.has(target)) return memo.get(target);
        if (target === 0) return 0; // If target amount is 0, no coins needed
        if (target < 0) return -1; // If target amount is negative, not possible


        let minCoins = Infinity; // Initialize minimum number of coins to Infinity

        // Iterate through each coin denomination
        for (let coin of coins) {
            // Recursively calculate the number of coins needed for the remaining amount
            const result = helper(target - coin);
            // If the result is valid (not -1) and less than the current minimum, update minCoins
            if (result >= 0 && result < minCoins) {
                minCoins = result + 1; // Add 1 to include the current coin
            }
        }
        
        const finalResult =  minCoins === Infinity ? -1 : minCoins;;
        memo.set(target, finalResult)
        return finalResult;
    }

    // Call the helper function with the target amount
    return helper(amount);
}

console.log(coinChange([1, 2, 5], 11));
// console.log(coinChange([4, 6, 1], 11))
// console.log(coinChange([2], 3))
// console.log(coinChange([1], 0))
