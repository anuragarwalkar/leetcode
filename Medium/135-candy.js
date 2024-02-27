/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {

    const candies = Array.from({length: ratings.length}, () => 1);
    
    for(let i = 1; i < ratings.length; i++) {
       if(ratings[i] > ratings[i - 1]) {
        candies[i] = candies[i - 1] + 1
       }
    }

    for(let i = ratings.length - 2; i >= 0; i--) {
        if(ratings[i] > ratings[i + 1]) {
         candies[i] = Math.max(candies[i], candies[i + 1] + 1)
        }
    }

    return candies.reduce((acc, cur) => acc + cur);
};

// console.log(candy([1,0,2]));
// console.log(candy([1,2,87,87,87,2,1]));
console.log(candy([1,0,2,10,5,3]));