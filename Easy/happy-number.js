/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const cache = new Set();

    while(n && n !== 1) {
       const numbers = n.toString().split('');
       n = numbers.reduce( (acc, curr) => {
        acc += Math.pow(curr, 2)
        return acc;
        }, 0);

        if(cache.has(n)) {
            return false;
        }

        if(!cache.has(n)) {
            cache.add(n);
        }

    }

    return true;
};


console.log(isHappy(2))

