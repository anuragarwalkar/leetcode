function calculate(s) {
    let stack = [];
    let num = 0;
    let sign = 1;
    let result = 0;

    for (let char of s) {
        if (!isNaN(parseInt(char))) {
            num = num * 10 + parseInt(char);
        } else if (char === '+' || char === '-') {
            result += sign * num;
            num = 0;
            sign = char === '+' ? 1 : -1;
        } else if (char === '(') {
            stack.push(result);
            stack.push(sign);
            result = 0;
            sign = 1;
        } else if (char === ')') {
            result += sign * num;
            num = 0;
            result *= stack.pop();  // pop the sign
            result += stack.pop();  // pop the result outside the brackets
        }
    }
    return result + sign * num;
}

// console.log(calculate(" 2-1 + 2 "));
// console.log(calculate("1 + 1"));
console.log(calculate("(1+(44+5))"));