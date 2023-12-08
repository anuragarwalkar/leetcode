/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    if (n === 1) {
        return "1";
    }

    const count = countAndSay(n - 1).split('');

    let say = "";
    let counter = 1;
    
    for (let i = 1; i <= count.length; i++) {
        if(count[i - 1] === count[i]) {
            counter++;
        }else {
            say += counter + count[i - 1];
            counter = 1;
        }
    }


    return say;
};

console.log(countAndSay(6));