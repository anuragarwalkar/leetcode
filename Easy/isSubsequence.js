/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let pointerA = 0;
    let pointerB = 0;

    while(pointerB < t.length) {
        if(s[pointerA] === t[pointerB]) {
            pointerA++;
        }
        pointerB++
    }

    return pointerA === s.length;
};

console.log(isSubsequence("ab", "baab"))