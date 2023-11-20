
var hammingWeight = function(n) {
    let counter = 0

    for(let i = 0; i < 32; i++) {
        const count = (n >> i) & 1
        count && counter++;
    }

    return counter;
};


const start = performance.now()
console.log(hammingWeight(213423556672313));


console.log('Performance:', performance.now()- start);