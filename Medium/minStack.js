
var MinStack = function() {
    this._stack = [];
    this.lastMin = Number.MAX_VALUE;
    this.min = Number.MAX_VALUE;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this._stack.push(val);
    const lastMin = this.min;
    this.min = val < this.min ? val : min;

    if(lastMin !== this.min) {
        
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this._stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this._stack[this._stack.length - 1][0]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this._stack[this._stack.length - 1][1]
};


var obj = new MinStack()
obj.push(-2);
obj.push(-3);
obj.push(0);
obj.pop();
obj.pop();

console.log(obj.getMin())
console.log(obj.top())
