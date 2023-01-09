/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let largeNumber = num1;
    let smallNumber = num2;

    if(num1.length !== num2.length) {
        largeNumber = num1.length > num2.length ? num1 : num2;
        smallNumber = num1.length < num2.length ? num1 : num2;
    }

    const remaining = Array.from({length: largeNumber.length - smallNumber.length}, () => "0").join('');
    smallNumber = remaining + smallNumber;

    const total = [];
    let remainder = "0";

    for (let index = largeNumber.length - 1;  index >= 0; index--) {
        const ele1 = largeNumber[index];
        const ele2 = smallNumber[index];

       let innerTotal = (parseInt(ele1) + parseInt(ele2) + parseInt(remainder)).toString();

       if(remainder !== "0") {
        remainder = "0";
       }

       if(innerTotal.length === 2) {
        [remainder, innerTotal] = innerTotal.split('')
       }
       
       total.unshift(innerTotal);
    }

    return remainder !== "0" ? remainder + total.join('') : total.join('');
};

const result = addStrings("9133", "0")

console.log('result:', result);