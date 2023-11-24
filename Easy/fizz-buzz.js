/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let countThree = 1;
    let countFive = 1;

    const result = [];

    for(let i = 0; i < n; i++) {
        let printStr = "";

        if(countThree === 3) {
            printStr += "Fizz";
            countThree = 0;
        }

        if(countFive === 5) {
            printStr += "Buzz";
            countFive = 0;
        }

        result.push(printStr ? printStr : (i + 1).toString());

        countFive++;
        countThree++;
    }

    return result;
};

console.log(fizzBuzz(15));