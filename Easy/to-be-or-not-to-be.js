/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    function compareValues (a, b, equal = true) {
        if((a === b) && equal) {
            return true
        }

        if((a !== b) && !equal) {
            return true
        }

        throw new Error(a === b ? 'Equal' : 'Not Equal');
    }

    return {
        toBe: (compare) => {
            return compareValues(val, compare);
        },
        notToBe: (compare) => {
            return compareValues(val, compare, false);
        }
    }
};

const o = {}

const result = expect(o).notToBe(o);

console.log('result:', result);