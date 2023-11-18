/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
//     let max = 0;
//     for(let i = 0; i < prices.length; i++) {
//         for(let j = i +1; j < prices.length; j++) {
//             if((prices[j] > prices[i]) && (prices[j] - prices[i]) > max) {
//                 max = prices[j] - prices[i];
//             }
//         }
//     }

//     return max;
// };

// var maxProfit = function (prices) {
//     let lowestDay = 0;

//     for (let i = 0; i < prices.length; i++) {
//         if (prices[i] < prices[lowestDay]) {
//             lowestDay = i;
//         }
//     }

//     let highestDay = lowestDay + 1;

//     for (let i = lowestDay + 1; i < prices.length; i++) {
//         if ((prices[i] > prices[lowestDay]) && (prices[i] - prices[lowestDay]) > (prices[highestDay] - prices[lowestDay])) {
//             highestDay = i;
//         }
//     }

//     if(!prices[highestDay]) {
//         return 0;
//     }

//     return prices[highestDay] - prices[lowestDay];
// };

// function maxProfit(prices) {
//   let max = 0;
//   let left = 0;
//   let right = 1;

//   while(left < prices.length && right < prices.length) {
//     if((prices[right] - prices[left]) > max) {
//         max = prices[right] - prices[left];
//         right++;
//     }else if(prices[left] > prices[right]) {
//         left++;
//         right++;
//     }
//   }

//   return max;

// }

function maxProfit(prices) {
    let maxP = 0;
    let min = Number.MAX_SAFE_INTEGER;

   for(let i = 0; i < prices.length; i++) {
        if(prices[i] < min) {
            min = prices[i];
        }else if(prices[i] - min > maxP) {
            maxP = prices[i] - min;
        }
   }

   return maxP;
  
  }


console.log(maxProfit([2,4,1]))