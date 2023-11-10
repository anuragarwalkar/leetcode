/**
 * @param {Object} context
 * @param {Array} args
 * @return {null|boolean|number|string|Array|Object}
 */
Function.prototype.callPolyfill = function(context, ...args) {
    const temp = Symbol();
    const callback = this;
    
    Object.defineProperties(context, {[temp]: { value: callback, configurable: true }});

    const result = context[temp](...args);
    delete context[temp];

    return result;
}


function add(b) { 
    return this.a + b; 
}
const contextObj = {"a":5};

const res = add.callPolyfill({"a":5},7); // 2

console.log('res:', res);


// function tax(price, taxRate) {
//     const totalCost = price * (1 + taxRate);
//     console.log(`The cost of ${this.item} is ${totalCost}`);
//   }
//   tax.callPolyfill({item: "salad"}, 10, 0.1)

