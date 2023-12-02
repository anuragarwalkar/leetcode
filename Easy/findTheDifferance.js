/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const charCounterS = {};
    const charCounterT = {};
   
    for(let i = 0; i < s.length; i++) {
        charCounterS[s[i]] = charCounterS[s[i]] ??  1;
    }

    for(let j = 0; j < t.length; j++) {
        charCounterT[t[j]] = charCounterT[t[j]] ?? 1;
    }
    
    for(let key in charCounterT) {
        if(charCounterS[key] !== charCounterT[key]) {
            return key;
        }
    }

   

    return null;
};
let s =
"aabcd"
let t =
"abcde"

const result = findTheDifference(s, t);

console.log('result:', result);