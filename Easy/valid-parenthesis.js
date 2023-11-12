/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if(s.length % 2 !== 0) {
        return false;
    }
    
    const stack = [];

    const closingBracketMap = {
        '{': '}',
        '(': ')',
        '[': ']'
    }

    for (let i = 0; i < s.length; i++) {
        const isOpeningBracket = !!closingBracketMap[s[i]];

        if(isOpeningBracket) {
            stack.push(s[i]);
        }else {
            const closingBracket = s[i];
            const closingBracketFromStack = closingBracketMap[stack.pop()];
            
           if(closingBracket !== closingBracketFromStack) { 
            return false;
           }
        }
    }

    return stack.length === 0;
};


console.log(isValid("()[]{}"))

