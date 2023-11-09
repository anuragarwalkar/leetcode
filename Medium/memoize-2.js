/**
 * @param {Function} fn
 * @return {Function}
 */

function memoize(fn) {
    const _cache = new Map();
    return (...args) => {
        let node = _cache;

        for(let arg of args) {
            if(!node.has(arg)) {
                node.set(arg, new Map());
            }

            node = node.get(arg);
        }

        if(node.has('value')) {
            return node.get('value');
        }else {
            const value = fn(...args);
            node.set('value', value);

            return value;
        }
    }
}


const memo = memoize(function (a, b) { return (a + b); })

const result = memo(1, 2);
const result2 = memo(1, 2);

console.log('result:', result);
console.log('result2:', result2);