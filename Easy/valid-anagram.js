
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== s.length) {
        return false;
    }

    const charsMap = new Map();

    for(let i = 0; i < s.length; i++) {
        const char = s[i];
        charsMap.set(char, (charsMap.get(char) ?? 0) + 1);
    }

    for(let i = 0; i < t.length; i++) {
        const char = t[i];

        if(!charsMap.has(char)) {
            return false;
        }

        charsMap.get(char) > 1 ? charsMap.set(char, charsMap.get(char) - 1) : charsMap.delete(char);
    }

    if(charsMap.size !== 0) {
        return false;
    }

    return true;
};