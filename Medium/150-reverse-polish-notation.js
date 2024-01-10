/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const stack = [];

    for (let token of tokens) {
        if (token === "+") {
            stack.push(stack.pop() + stack.pop());
        } else if (token === "-") {
            const a = stack.pop();
            const b = stack.pop();
            stack.push(b - a);
        } else if (token === "*") {
            stack.push(stack.pop() * stack.pop());
        } else if (token === "/") {
            const a = stack.pop();
            const b = stack.pop();
            stack.push(parseInt(b / a));
        } else {
            stack.push(parseInt(token));
        }
    }

    return stack[0];
};


// console.log(evalRPN(["2", "1", "+", "3", "*"]));
console.log(evalRPN(["4","13","5","/","+"]));