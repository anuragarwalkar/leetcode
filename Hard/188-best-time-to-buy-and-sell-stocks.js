let counter = 0
var maxProfit = function (k = 2, a1, i = 0, hasStock = false, memo = {}) {
  const key = `${i}-${hasStock}-${k}`;

  if (key in memo) {
    return memo[key];
  }
  
  if (k === 0 || i >= a1.length) {
    return 0;
  }
  console.log(counter++)
  if (hasStock) {
    const sellToday = a1[i] + maxProfit(k - 1, a1, i + 1, false, memo);
    const skipToday = maxProfit(k, a1, i + 1, true, memo);
    memo[key] = Math.max(sellToday, skipToday);
  } else {
    const buyToday = -a1[i] + maxProfit(k, a1, i + 1, true, memo);
    const skipToday = maxProfit(k, a1, i + 1, false, memo, k);
    memo[key] = Math.max(buyToday, skipToday);
  }

  return memo[key];
};

// function maxProfit(k, prices) {
//   if (k === 0 || prices.length <= 1) {
//       return 0;
//   }

//   const n = prices.length;
  
//   function buyAndSell(prices, index, k, isBuying) {
//       // Base case: no transactions left or reached the end of prices array
//       if (index >= n || k === 0) {
//           return 0;
//       }

//       // If we are buying at this index
//       if (isBuying) {
//           const buy = buyAndSell(prices, index + 1, k, false) - prices[index];
//           const skip = buyAndSell(prices, index + 1, k, true);
//           return Math.max(buy, skip);
//       } else { // If we are selling at this index
//           const sell = buyAndSell(prices, index + 1, k - 1, true) + prices[index];
//           const skip = buyAndSell(prices, index + 1, k, false);
//           return Math.max(sell, skip);
//       }
//   }

//   return buyAndSell(prices, 0, k, true);
// }


console.log(maxProfit(7, [2,1,4,5,2,9,7]));
