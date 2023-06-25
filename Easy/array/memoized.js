let callCount = 0;

function memoize(fn) {
    const memoizedValues = {};
    return function(...args) {
        if(memoizedValues[args.toString()] == undefined) {
            const value = fn(...args);
            return memoizedValues[args.toString()] = value;
        }else {
            callCount++;
            return memoizedValues[args.toString()];
        }
    }
}

const sum = (a, b) => a + b;

const memoizedSum = memoize(sum)

const result = memoizedSum(0, 0)
const resul0 = memoizedSum(0, 0)

console.log('result:', result, callCount);
