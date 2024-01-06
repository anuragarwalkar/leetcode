/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;

    for(let i = 1; i < prices.length; i++) {
        if(prices[i] > prices[i-1]) {
            profit += prices[i] - prices[i-1];
        }
    }

    return profit;
};

/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//     let buyIndex = 0
//     let sellIndex = 1;
//     let totalProfit = 0;
//     while (sellIndex < prices.length) {
//         if (prices[sellIndex] < prices[buyIndex]) {
//             buyIndex = sellIndex;
    
//         }
//         else if (prices[sellIndex] > prices[buyIndex]) {
//             totalProfit = totalProfit + (prices[sellIndex] - prices[buyIndex]);   
//             buyIndex = sellIndex;
//         }
//         sellIndex++;
//     }
//     return totalProfit;
// };

// console.log(maxProfit([7,1,5,3,6,4]));
// console.log(maxProfit([5, 6, 1, 1, 5, 10, 12]));
console.log(maxProfit([1, 2, 300, 4, 200, 6, 7, 100]));